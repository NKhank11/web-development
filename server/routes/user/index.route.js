const express = require('express');
const verifyJWT = require('../../middlewares/verifyJWT.middleware');
const attachOrCreateCartId = require('../../middlewares/attachOrCreateCardId.middleware');

const userRoutes = (app) => {
    // Routes
    app.use('/api/auth/register', require('./register.route'));
    app.use('/api/auth/login', require('./login.route'));
    app.use('/api/auth/token/refresh', require('./refreshToken.route'));
    app.use('/api/auth/logout', require('./logout.route'));
    app.use('/api/auth/forget-password', require('./forgetPassword.route'));
    app.use('/api/auth/reset-password', require('./resetPassword.route'));

    app.use('/api/categories', require('./category.route'));

    // Google and Facebook OAuth routes
    app.use('/api/auth/google', require('./google-auth.route'));
    // app.use('/api/auth/facebook', require('./facebook-auth.route'));

    // Routes for products
    app.use('/api/products', require('./product.route'));

    app.use('/api/payment', require('./payment.route'));

    app.use('/api/cart', attachOrCreateCartId, require('./cart.route'));
    
    // Routes for store
    app.use('/api/store', require('./store.route'));

    // Middleware to verify JWT
    app.use(verifyJWT);

    // Middleware to attach or create cart_id
    // app.use(attachOrCreateCartId);

    app.use('/api/users', attachOrCreateCartId, require('./users.route'));

    app.use('/api/orders', require('./order.route'));   

    app.use('/api/cart', attachOrCreateCartId, require('./cart.route'));

    // User routes
    app.use('/api/users', require('./users.route'));
}

module.exports = userRoutes;

