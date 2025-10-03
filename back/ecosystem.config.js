module.exports = {
  apps: [
    {
      name: "back",
      script: "index.js",
      env_production: {
        NODE_ENV: "production",
        PORT: process.env.PORT
      }
    }
  ]
};
