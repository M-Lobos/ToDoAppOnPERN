import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material"

export default function TaskList() {

    const [tasks, setTask] = useState([])

    const loadTask = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/tasks")
            const currentTasks = await response.json();
            /*  console.log("data", currentTasks); */
            setTask(currentTasks.data)
        } catch (error) {
            console.log("error", error);
        }
    }

    const deleteTask = async (id) => {
        try {
            //task removed from backend
            /* const response = */ await fetch(`http://localhost:3000/api/v1/tasks/${id}`, {
            method: "DELETE",
        });
            //there is no data to be returned, so we don't need to parse the response, but we can see the response
            /* console.log(response) */

            //now remove from the frontend
            setTask(tasks.filter(task => task.id !== id));
            //this will filter the tasks array and remove the task with the id that we just deleted from the backend
        }

        catch (error) {
            console.log("error", error);
        }
    }

    //need to crate another function with async await to fetch the data from the server, cause useEffect is not async
    useEffect(() => {
        loadTask();
    }, []);

    return (
        <>
            <h1>Task List</h1>
            {
                tasks.map((task) => (
                    <Card
                        key={task.id}
                        style={{
                            marginBottom: ".8rem",
                            backgroundColor: "#1e272e",
                            color: "#fff",
                            borderRadius: "10px",
                        }}
                    >
                        <CardContent
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div>
                                <Typography
                                    style={{
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        marginBottom: ".5rem",
                                    }}
                                >{task.title}</Typography>
                                <Typography>{task.description}</Typography>
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() => console.log("edit")}
                                    style={{
                                        marginRight: ".5rem",
                                        marginTop: ".5rem",
                                    }}
                                >
                                    Edit
                                </Button>

                                <Button
                                    variant="contained"
                                    color="warning"
                                    onClick={() => {
                                        deleteTask(task.id);
                                        loadTask();
                                    }}
                                    style={{
                                        marginLeft: ".5rem",
                                        marginTop: ".5rem",
                                    }}
                                >
                                    Delete
                                </Button>
                            </div>

                        </CardContent>
                    </Card>
                ))}
        </>
    )
}
