import { useLocation, useNavigate } from "react-router-dom"
import useAuth from "../App/middleWare/useAuth";



const Delete = () => {

    const { deleteGoal } = useAuth();


    const navigate = useNavigate();
    const location = useLocation();
    const id = location.state.id;

    const handleDelete = () => {
        deleteGoal(id);
        navigate('/display');
    }
    const handleCancel = () => {
        navigate('/display');
    }

    return (
        <div>
            <h3>Confirm deletion</h3>
            <button onClick={handleDelete}>Confirm</button>
            <button onClick={handleCancel}>Cancel</button>
        </div>
    )
}

export default Delete;