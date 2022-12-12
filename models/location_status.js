const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return location_status.init(sequelize, DataTypes);
}

class location_status extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    target_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    host: {
      type: DataTypes.STRING(10),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'location_status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "target_id" },
        ]
      },
    ]
  });
  }
}
