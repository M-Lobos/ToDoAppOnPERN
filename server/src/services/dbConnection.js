import { dbConfig } from "../config/db.config.js";
import { models } from "../models/init-models.js";

export const dbConnection = async () => {
    try {
        await dbConfig.authenticate();
        models
        console.log("🟡 Syncing models.");
        await dbConfig.sync({ alter: true }); // Sync all models that are not already in the database
        console.log("✅ DB connection has been established successfully.");
    } catch (error) {
        console.error("🔴 Unable to connect to the database:", error);
    }
}