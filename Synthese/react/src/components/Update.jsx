import { useLocation } from "react-router-dom";
import useAuth from "../App/middleWare/useAuth";
import { useEffect } from "react";

const Update = () => {
  const [goal, setGaol] = useState();

  const { updateGoal } = useAuth();
  const location = useLocation();
  const { item } = location.state.payload;

  useEffect(() => {
    setGaol(item.text);
  }, []);

  const handleUpdate = () => {
    updateGoal(item._id, goal);
    navigate("/display");
  };
  const handleCancel = () => {
    navigate("/display");
  };

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <label className="form-label">Text :</label>
        <input
          className="form-input"
          type="email"
          value={goal}
          onChange={(e) => setGaol(e.target.value)}
        />
        <button type="submit" onClick={handleUpdate}>
          Confirm
        </button>
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default Update;
