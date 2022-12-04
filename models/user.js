import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
    class User extends Model {}
    User.init({
        intraId: DataTypes.STRING,
        blackhole: DataTypes.BOOLEAN,
        slackId: DataTypes.STRING,
    }, {
        sequelize,
        modelName: "User",
        tableName: "user_list",
    });
    return User;
}
