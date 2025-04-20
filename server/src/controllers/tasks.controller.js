import { models } from "../models/init-models.js";
import Task from "../models/task.js";


export const createTask = async (req, res) => {
    try {
        const { id, title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({
                code: 400,
                message: "Title and description are required",

            });
        }

        const existingTask = await Task.findOne({ where: { title } });
        if (existingTask) {
            return res.status(409).json({
                code: 409,
                message: "🟡 Task with this title already exists",
            });
        }

        const newTask = await Task.create({
            id,
            title,
            description
        });

        res.status(201).json({
            code: 201,
            message: "✅ Task created successfully",
            data: newTask
        })
        /*  console.log("Task created: ", newTask.toJSON());  */

    } catch (error) {
        res.status(500).json({
            message: "🔴 Internal server error",
            code: 500,
            error: error.message
        });

    }
}

export const getAllTasks = async (req, res) => {
    try {
        const allTasks = await models.Task.findAll();

        if (allTasks.length === 0) {
            return res.status(404).json({
                message: "No tasks found",
                code: 404,
                message: "No tasks found"
            });
        }

        res.status(200).json({
            message: "Tasks retrieved successfully",
            code: 200,
            data: allTasks
        });

        /* allTasks.forEach(task => {
            console.log("trask retrived: ", task.toJSON());
        }); */
    }


    catch (error) {
        res.status(500).json({
            message: "Internal server error",
            code: 500,
            error: error.message
        });
    }
}

export const getTaskById = async (req, res) => {
    const { id } = req.params;

    const task = await Task.findByPk(id);
    if (!task) {
        return res.status(404).json({
            code: 404,
            message: "🔴 Task not found",
        })
    }

    res.status(200).json({
        code: 200,
        message: "✅ Task retrieved successfully",
        data: task
    })

    /*     console.log("Task retrieved: ", task.toJSON()); 
     */
}

export const updateTaskById = async (req, res) => {
    try {
        const { id } = req.params;

        const updateData = await Task.update(req.body, {
            where: { id },
            returning: true
        });

        res.status(200).json({
            code: 200,
            message: "✅ Task updated successfully",
            data: updateData
        });

        /* console.log("Task updated: ", updateData[1][0].toJSON()); */

    } catch (error) {
        res.status(500).json({
            message: "🔴 Internal server error",
            code: 500,
            error: error.message
        });
    }
}

export const deleteTaskById = async (req, res) => {
    try {
        const { id } = req.params;

        const task = await Task.findByPk(id);

        if (!task) {
            return res.status(404).json({
                code: 404,
                message: "🔴 Task not found",
            })
        }

        await task.destroy({ where: { id } });
        res.status(200).json({
            code: 200,
            message: "✅ Task deleted successfully",
        });
        /* console.log("Task deleted: ", task.toJSON());  */

    } catch (error) {
        res.status(500).json({
            message: "🔴 Internal server error",
            code: 500,
            error: error.message
        });
    }
}