const db = require("../models");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var axios = require("axios");

module.exports = {
    findAllArticles: function(req, res) {
        db.Article
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    saveById: function(req, res) {
        db.Article
            .findOneAndUpdate
    }
}


