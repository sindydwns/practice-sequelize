const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return group_list.init(sequelize, DataTypes);
}

class group_list extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    group_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seeker_id: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    group_name: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    selected: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'group_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "group_id" },
        ]
      },
    ]
  });
  }
}
