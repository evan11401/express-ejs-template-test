var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('main/index', { title: 'Main' });
  
});

router.get('/data', function(req, res, next) {
  var drinks = [
        { name: 'Bloody Mary', drunkness: 3 },
        { name: 'Martini', drunkness: 5 },
        { name: 'Scotch', drunkness: 10 }
    ];
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('main/data', {
        drinks: drinks,
        tagline: tagline,
        title: 'Data'
    });
});


module.exports = router;
