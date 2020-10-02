module.exports = function (db) {
  return {
    // Get all examples
    getJabbers: function (req, res) {
      db.Jabber.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbJabber) {
        res.json(dbJabber);
      });
    },
    getJabber: function (req, res) {
      db.Jabber.findOne({ where: { id: req.params.id } }).then(function (dbJabber) {
        res.json(dbJabber);
      });
    },
    updateJabber: function (req, res) {
      db.Jabber.update({
        description: req.body.description
      }, { where: { id: req.body.id } }).then(function (dbJabber) {
        res.json(dbJabber);
      });
    },
    // Create a new example
    createJabbers: function (req, res) {
      db.Jabber.create(req.body).then(function (dbJabber) {
        res.json(dbJabber);
      });
    },
    // Delete an example by id
    deleteJabber: function (req, res) {
      db.Jabber.destroy({ where: { id: req.params.id } }).then(function (dbJabber) {
        res.json(dbJabber);
      });
    }
  };
};
