require('dotenv').config();
const app = require('./app');
/// Para subir las variables de entorno a heroku no se utilizan comillas ni nada de eso :v 

app.listen(app.get('port'), () => {
    console.log("Server on Port", app.get('port'));
})