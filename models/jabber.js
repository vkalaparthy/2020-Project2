const { Sequelize } = require('sequelize');

module.exports = function (sequelize, DataTypes) {
  const Jabber = sequelize.define('Jabber', {
    description: DataTypes.TEXT,
    place: DataTypes.STRING,
    state: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
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
