let express = require('express');
let app = express();
let morgan = require('morgan');
let bodyParser = require('body-parser');
let port = 1313;

//parse application/json and look for raw text                                        
app.use(bodyParser.json());                                     
app.use(bodyParser.urlencoded({extended: true}));               
app.use(bodyParser.text());                                    
app.use(bodyParser.json({ type: 'application/json'}));  


app.post("/recherche", function(req, res){
    var depart = req.body.depart;
    var destination = req.body.destination;
    var date = req.body.date;
    
    // On récupère dans la db les trajets qui correspondent.
    var lesTrajets = [];

    // On renvoit sous forme json les trajets qui correspondent à la recherche.
    res.json({
        status : "success",
        datas : lesTrajets
    });
});

/*<!-- 
    /REQ : "/recherche" -> POST
        var depart = req.body.depart;
        var destination = req.body.destination;
        var date = req.body.date;

        // On récupère dans la db les trajets qui correspondent.
        var lesTrajets = RequeteVersLaDB.

        // On renvoit sous forme json les trajets qui correspondent à la recherche.
        res.json(lesTrajets);
 -->

 <!-- 
    /TEST : 
        // Doit retourner -> http 200
        // Doit etre du JSON
        // Variable json "status" -> success
        // Variable json "datas" -> array de trajets
        // Chaque trajets doit avoir les propriétés : id, depart, destination, prix, .....
  -->*/




app.listen(port);
console.log("Listening on port " + port);

module.exports = app; // for testing