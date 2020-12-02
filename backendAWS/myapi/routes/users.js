var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {

  let dataArray = [
    { name: "Ryon", age: 12 },
    { name: "Melv", age: 13 },
    { name: "Gio", age: 50 }
  ];

  res.json({
    data: dataArray
  });

});

module.exports = router;
