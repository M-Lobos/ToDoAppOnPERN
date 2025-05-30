import { useState, useEffect } from "react"
import { Button, Card, CardContent, CircularProgress, Grid, TextField, Typography } from "@mui/material"
import { useNavigate, useParams } from "react-router-dom"



function TaskForm() {

    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const [loading, sEtloading] = useState(false)
    const [editing, setEditing] = useState(false)

    const params = useParams()
    //this will get the id from the url, so we can edit the task with that id
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        /* console.log("submit") */
        /* console.log("task", task) */
        sEtloading(true)

        if (editing) {
            const res = await fetch(`http://localhost:3000/api/v1/tasks/${params.id}`, {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(task),
            });

            const data = await res.json();
            console.log(data)

        } else {
            await fetch("http://localhost:3000/api/v1/tasks", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(task),
            });
        }


        sEtloading(false)
        navigate("/");
        //this will redirect to the main page (task list) after creating a new task
    }

    const handleChange = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
        //when tipping on tittle (name), update the title value, when typing on description (name), 
        //update the description value
        //this is saying:
        //setTask({ title: e.target.value }) 
        //setTask({ description: e.target.value })
    }

    const loadCurrentTask = async (id) => {
        try {
            const res = await fetch(`http://localhost:3000/api/v1/tasks/${id}`);
            const data = await res.json();
            setTask({
                title: data.data?.title ?? "",
                description: data.data?.description ?? ""
            });
            setEditing(true);

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (params.id) {
            loadCurrentTask(params.id)
        }
    }, [params.id]);

    return (
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
        >

            <Grid sx={2} >
                <Card
                    sx={{ mt: 5 }}
                    style={{
                        backgroundColor: "#1e272e",
                        padding: "1rem",
                    }}
                >
                    <Typography
                        variant="h5"
                        textAlign="center"
                        color="white"
                    > Create Task </Typography>
                    <CardContent>
                        <form id="formTask" onSubmit={handleSubmit}>

                            <TextField
                                variant="filled"
                                label="Task Title"
                                sx={{
                                    display: "block",
                                    margin: ".5rem 0"
                                }}
                                name="title"
                                value={task.title}
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                inputProps={{ style: { color: "white" } }}

                            />
                            <TextField
                                variant="filled"
                                label="Task Description"
                                multiline
                                rows={4}
                                sx={{
                                    display: "block",
                                    margin: ".5rem 0"
                                }}

                                name="description"
                                value={task.description}
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                inputProps={{ style: { color: "white" } }}
                            />

                            <Button
                                variant="contained"
                                type="submit"
                                sx={{ mt: 2 }}
                                disabled={!task.title || !task.description}
                                style={{
                                    color: "#fff",
                                }}
                            >
                                {loading ? (<CircularProgress
                                    color="inherit"
                                    size={24}
                                />) : (
                                    params.id ? "Update" : "Create"
                                )}

                            </Button>

                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default TaskForm