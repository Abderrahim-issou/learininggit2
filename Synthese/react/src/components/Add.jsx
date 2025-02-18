import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../App/middleWare/useAuth";
import { useState } from "react";

const Add = () => {
  const [goal, setGaol] = useState();
  const navigate = useNavigate();

  const { Add } = useAuth();
  



  const handleSubmit = (e) => {
    e.preventDefault();
    Add({text: goal});
    navigate("/display");
  };


  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <label className="form-label">Text :</label>
        <input
          className="form-input"
          type="text"
          value={goal}
          onChange={(e) => setGaol(e.target.value)}
        />
        <button type="submit" >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
