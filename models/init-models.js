const DataTypes = require("sequelize").DataTypes;
const _alarm = require("./alarm");
const _error_log = require("./error_log");
const _group_list = require("./group_list");
const _group_member = require("./group_member");
const _location_status = require("./location_status");
const _statistic_host = require("./statistic_host");
const _user_list = require("./user_list");

function initModels(sequelize) {
  const alarm = _alarm(sequelize, DataTypes);
  const error_log = _error_log(sequelize, DataTypes);
  const group_list = _group_list(sequelize, DataTypes);
  const group_member = _group_member(sequelize, DataTypes);
  const location_status = _location_status(sequelize, DataTypes);
  const statistic_host = _statistic_host(sequelize, DataTypes);
  const user_list = _user_list(sequelize, DataTypes);


  return {
    alarm,
    error_log,
    group_list,
    group_member,
    location_status,
    statistic_host,
    user_list,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
