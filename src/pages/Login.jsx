import React, { useContext, useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Context, server } from "../main";
import axios from "axios";
const Login = () => {
  const { isAuth, setIsAuth,loading,setLoading } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        `${server}/users/login`,
        {
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
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
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
          <button disabled={loading} type="submit" className="btn">Login</button>
          <h4>Or</h4>
          <Link to="/register">Sign Up</Link>
        </form>
      </section>
    </div>
  );
};

export default Login;
