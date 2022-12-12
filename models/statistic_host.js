const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return statistic_host.init(sequelize, DataTypes);
}

class statistic_host extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    reg_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    cluster: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    student_count: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'statistic_host',
    timestamps: false
  });
  }
}
