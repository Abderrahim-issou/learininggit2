import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../App/middleWare/useAuth";


const Login = () => {
  const {setAuth, Login} = useAuth();
  const [user, setUser] = useState({
        email: '',
        password: '',
  });
  const location = useLocation()
  const navigate = useNavigate();
  const pathname = location.state.from ;
  



  const handleSubmit = async (e) => {
    e.preventDefault();

      const accessToken = await Login(user);
      setAuth((prev)=>({
        ...prev,
        accessToken
      }))
      navigate(pathname ? pathname : '/');
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label className="form-label">Email:</label>
      <input
        className="form-input"
        type="email"
        value={user.email}
        onChange={(e) => setUser({...user, email: e.target.value })}
      />
      <br />
      <label className="form-label">Password :</label>
      <input
        className="form-input"
        type="text"
        value={user.nom}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

    <br />
      <button className="form-button" type="submit">
        Login
      </button>
    </form>
  );
};

export default Login;
