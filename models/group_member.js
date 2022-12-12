const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return group_member.init(sequelize, DataTypes);
}

class group_member extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    group_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    target_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'group_member',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "group_id" },
          { name: "target_id" },
        ]
      },
    ]
  });
  }
}
