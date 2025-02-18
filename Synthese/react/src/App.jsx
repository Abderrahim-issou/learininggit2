import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Display from "./components/display";
import LayOut from "./components/LayOut";
import CheckAuth from "./App/middleWare/RequiresAuth";
import Home from "./components/Home";
import Add from "./components/Add";
import Delete from "./components/Delete";
import Update from "./components/Update";
import Register from "./components/Register";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<LayOut />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<CheckAuth />}>

          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/delete" element={<Delete />} />
          <Route path="/update" element={<Update />} />
          <Route path="/display" element={<Display />} />
        </Route>
      </Route>
    </Routes>
    </>
  );
};

export default App;
