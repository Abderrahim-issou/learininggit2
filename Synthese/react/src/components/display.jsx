import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../App/middleWare/useAuth";

const Display = () => {
  const { fetchGoals } = useAuth();
  const navigate = useNavigate();
  const[data, setData] = useState([]);

  useEffect(()=>{
    const goals = fetchGoals();
    console.log(goals)
    setData(goals);
  },[]);

  const handleEdit = (item) => {
    navigate('/update', { state: { item } })
    
  };

  const handleDelete = (id) => {
    navigate('/delete', { state: { id } })
    
  };



  return (
    <div className="display-container">
        {data.length > 0 ? data.map((item, index) => (
          <div className="todo-item" key={index}>

            <span className="todo-telephone">{item.text}</span>
            
            <button
              className="edit-button"
              type="button"
              onClick={() => handleEdit(item)}
            >
              Edit
            </button>
            <button
              className="delete-button"
              type="button"
              onClick={() => handleDelete(item._id)}
            >
              Delete
            </button>

          </div>
        )): (
          <p>no hoes to display</p>
        )
        }
    </div>
  );
};

export default Display;
