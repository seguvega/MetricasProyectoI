module.exports = {
    DB: {
        host: process.env.GCLOUD_host,
        user: process.env.GCLOUD_user,
        password: process.env.GCLOUD_password,
        database: 'metrics',
        multipleStatements: true
    }
};