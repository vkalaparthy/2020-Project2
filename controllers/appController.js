module.exports = function (db) {
  return {
    // Get all jabbers
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
    // update a jabber -- all values
    updateJabber: function (req, res) {
      db.Jabber.update({
        description: req.body.description,
        place: req.body.place,
        state: req.body.state
      }, { where: { id: req.body.id } }).then(function (dbJabber) {
        res.json(dbJabber);
      });
    },
    // uppdate jabber like only
    updateLike: function (req, res) {
      let likeValue = req.body.like;
      if (likeValue === '' || likeValue === null) {
        likeValue = 1;
      } else {
        ++likeValue;
      }
      db.Jabber.update({
        like: likeValue
      }, { where: { id: req.body.id } }).then(function (dbJabber) {
        res.json(dbJabber);
      });
    },
    // Create a new jabber
    createJabbers: function (req, res) {
      db.Jabber.create(req.body).then(function (dbJabber) {
        res.json(dbJabber);
      });
    },
    // Delete an jabber by id
    deleteJabber: function (req, res) {
      db.Jabber.destroy({ where: { id: req.params.id } }).then(function (dbJabber) {
        res.json(dbJabber);
      });
    }
  };
};
