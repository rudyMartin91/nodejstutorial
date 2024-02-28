var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', test: 'ciao', number: 23423, userName: 'Rudy Martin', link: '/test', array: [
    "elemento 1",
    "elemento 2",
    "elemento 3",
    "elemento 4",
    "elemento 5",
    "elemento 6"
  ] });
});
router.get('/test', function(req, res, next) {
  res.render('test');
});
router.get('/paginahtml', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'views/pagina.html'));
});

module.exports = router;
