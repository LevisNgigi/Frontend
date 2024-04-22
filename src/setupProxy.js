const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // change this to match the endpoint of your Flask backend
    createProxyMiddleware({
      target: 'https://backend-i16n.onrender.com',
      changeOrigin: true,
    })
  );
};