const { Router } = require('express');
const DB = require('../models/mysql');
const router = Router();

router.get('/', (req, res) => {
    res.render('metricaSUS', { pagina: 'SUS' });
});

router.post('/', async(req, res) => {
    var preg1 = req.body.preg1
    var preg2 = req.body.preg2
    var preg3 = req.body.preg3
    var preg4 = req.body.preg4
    var preg5 = req.body.preg5
    var preg6 = req.body.preg6
    var preg7 = req.body.preg7
    var preg8 = req.body.preg8
    var preg9 = req.body.preg9
    var preg10 = req.body.preg10
    var impares = (preg1 - 1) + (preg3 - 1) + (preg5 - 1) + (preg7 - 1) + (preg9 - 1)
    var pares = (5 - preg2) + (5 - preg4) + (5 - preg6) + (5 - preg8) + (5 - preg10)
    var sus = (impares + pares) * 2.5
    const sql = "insert into resultados (nombre,resultado) values (?,?)";
    await DB.query(sql, [req.body.nombre, sus], (error, rows, fields) => {
        if (!error) {
            res.render('metricaSUS', {
                pagina: 'SUS',
                resultado: sus,
                nombre: `${req.body.nombre} Se ha ingresado correctamente tu resultado a la base de datos`
            });
        } else {
            res.send(error);
        }
    });
});

router.get('/consulta', async(req, res) => {
    var sql = "select * from resultados";
    await DB.query(sql, (error, row, fields) => {
        if (!error) {
            res.render('resultados', {
                pagina: 'Resultados',
                datos: row
            });
        } else {
            res.send(error)
        }
    });
});

module.exports = router;