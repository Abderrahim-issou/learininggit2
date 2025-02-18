/* eslint-disable react/prop-types */
import { useState } from "react";
import useAuth from "../App/middleWare/useAuth";

const Register = () => {
  const { Register } = useAuth();
  const [user, setUser] = useState({
    nom: '',
    password: '',
    email: '',
  });


  const handleSubmit = async (e) => {
    e.preventDefault();

      Register(user);
      

  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label className="form-label">Nom:</label>
      <input
        className="form-input"
        type="text"
        value={user.nom}
        onChange={(e) => setUser({ ...user, nom: e.target.value })}
      />
      <br />
      <label className="form-label">Email:</label>
      <input
        className="form-input"
        type="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <br />
      <label className="form-label">Password :</label>
      <input
        className="form-input"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <button className="form-button" type="submit">
        Register
      </button>
    </form>
  );
};

export default Register;
