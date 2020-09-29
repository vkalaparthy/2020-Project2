const { Sequelize } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  const Jabber = sequelize.define('Jabber', {
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    place: {
      type: DataTypes.STRING
    },
    state: {
      type: DataTypes.STRING
    },
    created: {
      type: DataTypes.DATE
    },
    like: {
      type: DataTypes.INTEGER
    }
  });

  Jabber.associate = function (models) {
    Jabber.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Jabber;
};
