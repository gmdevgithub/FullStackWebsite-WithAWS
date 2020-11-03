module.exports = function(app) 
{
    var legacy = require ('../backendAWS/LegacyDBController.js');


      
    app.route('/ListCust.php')
        .get(legacy.getallparts)

    console.log(legacy.getallparts.caller);

  };