var express = require("express");
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
var request = require("request");
var moment = require("moment");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.set("view engine", "ejs");
app.use(express.static("public"));
app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/html/index.html");
})

app.get("/new", function(req, res) {
    res.sendFile(__dirname + "/public/html/index-new.html");
})

app.get("/get_contracts", function(req, res) {
    fs.readFile('./data/contracts.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading file from disk: ${err}`);
        } else {
            // parse JSON string to JSON object
            const databases = JSON.parse(data);
            res.json(databases);
        }
    });
});

app.post("/save_contract", function(req, res) {
    console.log(req.body.contractAddr)
    var contractAddr = req.body.contractAddr;
    fs.readFile('./data/contracts.json', 'utf8', (err, data) => {
        if (err) {
            console.log(`Error reading file from disk: ${err}`);
        } else {
            // parse JSON string to JSON object
            const databases = JSON.parse(data);
            // add a new record
            databases.push({
                contract: contractAddr
            });

            // write new data back to the file
            fs.writeFileSync('./data/contracts.json', JSON.stringify(databases, null, 4), (err) => {
                if (err) {
                    console.log(`Error writing file: ${err}`);
                } else {
                    console.log("Success updating contracts");
                }
            });
        }

    });
});
app.get("/matches", function(req, res) {
    request("https://api.crowdscores.com/v1/matches?api_key=716b641aec224878b4563c19a3b5fb45", function(error, response, body) {
        if (!error && response.statusCode == 200) {
            body = JSON.parse(body);

            for (var i = 0; i < body.length; i++) {
                body[i].start = moment.unix(body[i].start / 1000).format("YYYY MMM DD hh:mm:ss");
            }

            res.render(__dirname + "/public/html/matches.ejs", {
                matches: body
            });
        } else {
            res.send("An error occured");
        }
    })
})

var PythonShell = require("python-shell");

app.get("/getURL", function(req, res) {
    var matchId = req.query.matchId;
    
    var options = {
        args: ["-e", "-p", "044992e9473b7d90ca54d2886c7addd14a61109af202f1c95e218b0c99eb060c7134c4ae46345d0383ac996185762f04997d6fd6c393c86e4325c469741e64eca9", "json(https://api.crowdscores.com/v1/matches/" + matchId + "?api_key=7b7a988932de4eaab4ed1b4dcdc1a82a).outcome.winner"],
        scriptPath: __dirname
    };

    PythonShell.run("encrypted_queries_tools.py", options, function (err, results) {
        if(err)
        {
            res.send(err);
        }
        else
        {
            res.send(results[0]);
        }
    });
})