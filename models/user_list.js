const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return user_list.init(sequelize, DataTypes);
}

class user_list extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    intra_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    slack_id: {
      type: DataTypes.STRING(11),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'user_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "intra_id" },
        ]
      },
    ]
  });
  }
}
