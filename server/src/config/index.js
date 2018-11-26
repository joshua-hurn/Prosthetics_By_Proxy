// Remember to set the NODE_ENV environment property to "production" (no quotes)
// in the settings of your deployed app (AWS, Heroku, etc)
let env = process.env.NODE_ENV || 'development';
// Depending on the whether we are in development or production (deployed),
// import either env/development.js or env/production.js
let config = require(`./env/${env}`).cfg;

export { config };
