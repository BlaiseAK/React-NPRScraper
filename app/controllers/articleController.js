const db = require("../models");

module.exports = {
    findAllArticles: function(req, res) {
        db.Article
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    }
}