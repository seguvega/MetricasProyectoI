module.exports = {
    DB: {
        connectionLimit: 100,
        queueLimit: 0,
        host: process.env.GCLOUD_host,
        user: process.env.GCLOUD_user,
        password: process.env.GCLOUD_password,
        database: 'metrics',
        debug: true,
        wait_timeout: 28800,
        multipleStatements: true
    }
};