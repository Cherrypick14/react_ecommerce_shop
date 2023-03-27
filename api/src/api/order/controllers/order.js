const stripe = require('stripe')(process.env.STRIPE_KEY);
'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({strapi})=>({
      async create(ctx){
         const{products} = ctx.request.body;
         const lineItems = await Promise.all(  //we use promise all because we have more than one product
          products.map(async (product)=>{
            const item = await strapi
            .service('api::product.product'
            .findOne(product.id));
            return {
                price_data:{
                    currency:"usd",
                    product_data:{
                        name: item.title
                    },
                    unit_amount:item.price*100
                },
                 quantity: item.quantity
            }
          })
        
         );
         try {
            const session = await stripe.checkout.sessions.create({
                line_items: lineItems,
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}?success=true`,
                cancel_url: `${process.env.CLIENT_URL}/?success=false`,
                shipping_address:{allowed_countries:['US','AUS','KE','UK']},
                payment_method: ["card"],
              });

              await strapi
              .service("api::order.order")
              .create({ data: {  products, stripeId: session.id } });

              return { stripeSession: session };
            
         } catch (error) {
            ctx.response.status = 500;
             return error
         }
      }

}));
