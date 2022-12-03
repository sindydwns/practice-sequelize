import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import process from "process";
import dotenv from "dotenv";
import { fileURLToPath } from 'url';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const basename = path.basename(__filename);
const db = {};
const sequelize = new Sequelize({
	username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_BASE,
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE,
});
const modelFiles = fs.readdirSync(__dirname)
	.filter(x => x.indexOf(".") !== 0)
	.filter(x => x !== basename)
	.filter(x => x.slice(-3) === ".js");

for (const modelFile of modelFiles) {
	const modelPath = path.join(__dirname, modelFile);
	const { default: createModel } = await import(modelPath);
	const model = createModel(sequelize, Sequelize.DataTypes);
	db[model.name] = model;
}

for (const key of Object.keys(db)) {
	if (db[key].associate)
		db[key].associate(db);
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
