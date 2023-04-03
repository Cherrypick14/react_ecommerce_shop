const strapi = require("strapi");

// Override the default server configuration
const server = strapi({ 
  dir: __dirname, 
  url: "http://localhost", 
  port: 1337,
  host: "0.0.0.0",
  admin: {
    auth: {
      secret: process.env.ADMIN_JWT_SECRET,
    },
  },
});

// Export the Firebase Cloud Function
exports.strapiApi = server.app.callback();

