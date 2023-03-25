const stripe = require('stripe')(process.env.STRIPE_KEY);
'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({strapi})=>({
      async create(ctx){
         const{email, products} = ctx.request.body;
         const lineItems = await Promise.all(  //we use promise all because we have more than one product
          products.map(async (item)=>{
            const item = await strapi
            .service('api::product.product'
            .findOne(product.id));
            return {
                
            }
          })
        
         );
         try {
            const session = await stripe.checkout.sessions.create({
                line_items: [
                  {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: '{{PRICE_ID}}',
                    quantity: 1,
                  },
                ],
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}?success=true`,
                cancel_url: `${process.env.CLIENT_URL}/?success=false`,
              });
            

         } catch (error) {
            ctx.response.status = 500;
             return error
         }
      }

}));
