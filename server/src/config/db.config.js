import { Sequelize } from 'sequelize';
import { config } from './env.config.js';

const { host, user, pass, name, dialect, port } = config.db;

if (!host || !user || !pass || !name || !dialect || !port) {
    throw new Error('🟡 Database configuration is missing or incomplete.');
}

export const dbConfig = new Sequelize(name, user, pass, {
    host,
    dialect,
    port,
    logging: false, // Disable logging; default: console.log
    define: {
        timestamps: true, // Add createdAt and updatedAt fields to all models

    }
});
