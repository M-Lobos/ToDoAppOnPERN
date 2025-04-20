import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Task extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "task_title_key"
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'task',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "task_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "task_title_key",
        unique: true,
        fields: [
          { name: "title" },
        ]
      },
    ]
  });
  }
}
