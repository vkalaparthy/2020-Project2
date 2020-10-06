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
    // update like column in Jabber and also LikedBy if it does not exist
    updateLike: function (req, res) {
      let likeValue = req.body.like;
      // console.log('********  jabberId: ' + req.body.id);
      const userId = req.session.passport.user.id;
      // console.log('********  userId: ' + userId);
      console.log(req.session.passport.user.id);
      db.LikedBy.findOne({ where: { jabberId: req.body.id, userId: userId } }).then(function (dbLikedBy) {
        if (!dbLikedBy) { // Not liked before, so add
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
          // Also update the likedBy Table
          db.LikedBy.create({
            userId: userId,
            jabberId: req.body.id
          }).then(function () {
            res.end('Success');
          });
        } else {
          res.end('Success');
        }
      });
    },
    // Create a new jabber
    createJabbers: function (req, res) {
      db.Jabber.create(req.body).then(function (dbJabber) {
        res.json(dbJabber);
      });
    },
    // Delete an jabber by id and destroy rows in likedBy Table
    deleteJabber: function (req, res) {
      db.Jabber.destroy({ where: { id: req.params.id } }).then(function (dbJabber) {
        db.LikedBy.destroy({ where: { jabberId: req.params.id } });
        res.json(dbJabber);
      });
    }
  };
};
