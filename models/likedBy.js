module.exports = function (sequelize, DataTypes) {
  const LikedBy = sequelize.define('LikedBy', {
    userId: DataTypes.INTEGER,
    jabberId: DataTypes.INTEGER
  }, {
    freezeTableName: true // Model tableName will be the same as the model name
  });
  return LikedBy;
};
