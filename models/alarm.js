const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return alarm.init(sequelize, DataTypes);
}

class alarm extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    alarm_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seeker_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    target_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'alarm',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "alarm_id" },
        ]
      },
      {
        name: "seeker_id",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "seeker_id" },
          { name: "target_id" },
        ]
      },
    ]
  });
  }
}
