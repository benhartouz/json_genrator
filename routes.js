var express = require('express') ,
    router = express.Router()

// Readfile from local file
router.get('/readfile', function (req, res) {
    var jsonfile = require('jsonfile')
    var file = __dirname + '/src/js/data.json';
    jsonfile.readFile(file, function(err, obj) {
        res.send(obj);
    })
})
  
// Write to local file
router.post('/writefile', function (req, res) {

    res.setHeader('Content-Type', 'application/json');
    var jsonObj = req.body.json;
    var jsonfile = require('jsonfile')
    var file = __dirname + '/src/js/data.json';
    jsonfile.writeFile(file, jsonObj, function (err) {
        if(err){
            console.error(err)   
        }
    })
    res.send({
        status : 200,
        message : "json object has been saved successfuly"
    });

})

// export modules
module.exports = router