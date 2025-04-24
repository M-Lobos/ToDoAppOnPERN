import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import TaskList from "./components/TaskList.jsx";
import TaskForm from "./components/TaskForm.jsx";
import Navbar from "./components/Navbar.jsx";
import Container from "@mui/material/Container";



function App() {
  return (
    <BrowserRouter>
      <Navbar id="" />

      <Container>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/task/new" element={<TaskForm />} />
          <Route path="/task/:id/edit" element={<TaskForm />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

/* As mentioned, we can navigate between views without reloading the page... we do so importing BrowserRouter (this say we are going to navigate between views) and Routes (this is the component that will contain the routes),then the Route component wich is the route it self */

/* As mentioned, we can navigate between views without reloading the page. 
To do this, we use:

SPA SINGLE PAGE APP 

    - BrowserRouter: defines that we're using React Router for client-side navigation.
    - Routes: acts as a container for all the Route components.
    - Route: defines each individual route, specifying the path and which component to render.
*/
