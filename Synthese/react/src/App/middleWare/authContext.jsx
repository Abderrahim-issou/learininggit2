import { Children, createContext, useState } from "react";


const authContext = createContext();


export const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({});
    const fetchGoals = async (id = undefined) => {
        if(id){
            const response = await fetch(`http://localhost:3000/goals/getGoByid/${id}`);        
            const goals = await response.json();
            return goals;
        }else{
            const response = await fetch('http://localhost:3000/goals/getGols');        
            const goals = await response.json();
            return goals;
        }
    }


    const Register =  async(user) => {
        
        const response = await fetch(`http://localhost:3000/auth/register`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(user)
        });
        console.log(response);
        
    }
    
    const Login =  async(user) => {
        
        const response = await fetch(`http://localhost:3000/auth/login`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body: JSON.stringify(user),
        });
        return response.json();
    }

    const Add =  async(goal) => {
        
        const response = await fetch(`http://localhost:3000/goals/addGoal`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(goal)
        });
        response.ok && console.log(response.json());
        
    }

    const deleteGoal = async (id) => {

        fetch(`http://localhost:3000/goals/deleteGoal/${id}`,{
            method: 'DELETE',
        });
        fetchSTGS();
    }

    const updateGoal =  async(id ,goal) => {
        const response = await fetch(`http://localhost:3000/goals/updateGoal/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(goal)
        });
        console.log(response.json());

    }

    return(
        <authContext.Provider value={{auth, setAuth, Register, Login, fetchGoals, Add, updateGoal, deleteGoal}}>
            {children}
        </authContext.Provider>
    )
}
export default authContext;