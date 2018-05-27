module.exports = {

  db: process.env.MONGODB || process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/stripe-membership',

  sessionSecret: process.env.SESSION_SECRET || 'hsafasdfsdfasdfasjsfasdgfkjasdgfkajsdhfklashdk',

  mailgun: {
    apiKey: process.env.MAILGUN_API_KEY || 'a6f33a986cc5acc82a59f06eb0e9ffbd-115fe3a6-3d3d63c6',
    domain: process.env.MAILGUN_DOMAIN || 'mg.swaggeryoutube.com'
  },

  stripeOptions: {
    apiKey: process.env.STRIPE_KEY || 'sk_live_FMML2RvezgxcodYz7u0ccHkj',
    stripePubKey: process.env.STRIPE_PUB_KEY || 'pk_live_RLhaNmKbyQdsc7EJjHqrZHdj',
    /*apiKey: process.env.STRIPE_KEY || 'sk_test_KmpTiyK3Y2ephcitxm3krSmg',
    stripePubKey: process.env.STRIPE_PUB_KEY || 'pk_test_h8WSykC15b08lV29wTiUpPQq',*/
    defaultPlan: 'unlimited',
    plans: ['unlimited'],
    planData: {
      'unlimited': {
        name: 'Unlimited Hosting',
        price: 3.99
      }
    }
  },

  googleAnalytics: process.env.GOOGLE_ANALYTICS || ''
};
