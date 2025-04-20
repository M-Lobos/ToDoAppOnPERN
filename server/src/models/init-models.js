import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Task from "./task.js";

import { dbConfig } from "../config/db.config.js";

export const initModels = (sequelize) => {
  const Task = _Task.init(sequelize, DataTypes);

  return {
    Task,
  };
}


export const models = initModels(dbConfig);
