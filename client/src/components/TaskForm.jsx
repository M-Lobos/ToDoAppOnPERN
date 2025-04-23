import { useState, useEffect } from "react"
import { Button, Card, CardContent, Grid, TextField, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"



function TaskForm() {

    const [task, setTask] = useState({
        title: "",
        description: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        /* console.log("submit") */
        /* console.log("task", task) */
        const res = await fetch("http://localhost:3000/api/v1/tasks", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(task),
        });
        const data = await res.json();
        console.log("data", data);

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
                        vvariant="h5"
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
                                onChange={handleChange}
                                InputLabelProps={{ style: { color: "white" } }}
                                inputProps={{ style: { color: "white" } }}
                            />

                            <Button color="primary" variant="contained" type="submit" sx={{ mt: 2 }}>
                                Save
                            </Button>

                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default TaskForm