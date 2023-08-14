import React, { useContext } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Context, server } from "../main";
import toast from "react-hot-toast";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth, setIsAuth,loading,setLoading } = useContext(Context);
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/users/new`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsAuth(true);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
      setIsAuth(false);
      console.log(error);
    }
  };
  if (isAuth) return <Navigate to={"/"} />;
  return (
    <div>
      <div className="login">
        <section>
          <form onSubmit={submitHandler}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              required
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              required
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              required
            />
            <button disabled={loading}type="submit" className="btn">SIGN UP</button>
            <h4>Or</h4>
            <Link to="/login">Log In</Link>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Register;
