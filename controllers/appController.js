module.exports = function (db) {
  return {
    // Get all examples
    getJabbers: function (req, res) {
      db.Jabber.findAll({ where: { UserId: req.session.passport.user.id } }).then(function (dbExamples) {
        res.json(dbjabber);
      });
    },
    // Create a new example
    createMessage: function (req, res) {
      db.Jabber.create(req.body).then(function (dbExample) {
        res.json(dbjabber);
      });
    },
    // Delete an example by id
    deleteMessage: function (req, res) {
      db.Jabber.destroy({ where: { id: req.params.id } }).then(function (dbExample) {
        res.json(dbjabber);
      });
    }

  };
};
