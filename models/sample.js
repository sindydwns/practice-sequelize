import { DataTypes, Model } from "sequelize";
import { sequelize } from "../setting.js";

class User extends Model {}
User.init({
    intraId: DataTypes.STRING,
    blackhole: DataTypes.BOOLEAN,
    slackId: DataTypes.STRING,
}, {
    sequelize,
    modelName: "User",
    tableName: "user",
});
export default User;
