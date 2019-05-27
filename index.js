const request = require("request");
const express = require("express");
const axios = require("axios");
const app = express();

app.get("/", function(req, res) {
    axios
        .get(
            "https://api.movidesk.com/public/v1/tickets?token=7ba6f07f-3e99-4d0d-b988-222759dde6b1&id=1"
        )
        .then(response => res.send(response.data))
        .catch(function(error) {
            console.log(error);
        });
});

app.listen(3333, () => console.log("Servidor rodando local na porta 3333"));

request("http://localhost:3333", function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); // Aqui podes ver o HTML da página pedida.
    }
});
