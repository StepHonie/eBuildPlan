var app = {
    user: 'ctuapp',
    password: 'Ctu777333app',
    server: 'cnctug0sql02',
    database: 'wdb',
    requestTimeout:300000,
    //port: 1433,
    options: {
      encrypt: true // Use this if you're on Windows Azure
    },
    pool: {
        min: 0,
        max: 100,
        idleTimeoutMillis: 300000
    }
};

module.exports = app;
