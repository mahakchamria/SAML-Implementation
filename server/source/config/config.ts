const config = {
    saml: {
        cert: './source/config/saml.pem',
        entryPoint: 'https://dev-46591598.okta.com/app/dev-46591598_myreact_1/exkagw0k4nDisWPuO5d7/sso/saml',
        issuer: 'http://localhost:1337',
        options: {
            failureRedirect: '/login',
            failureFlash: true
        }
    },
    server: {
        port: 1337
    },
    session: {
        resave: false,
        secret: 'supersecretamazingpassword',
        saveUninitialized: true
    }
};

export default config;