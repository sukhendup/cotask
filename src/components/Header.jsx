import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import axios from "axios";
import { toast } from "react-hot-toast";
const Header = () => {
  const { isAuth, setIsAuth,loading,setLoading} = useContext(Context);
  const logoutHandler = async () => {
    setLoading(true)
    try {
      await axios.get(
        `${server}/users/logout`,
        {
          withCredentials: true,
        }
      );
      toast.success("Logged Out Successfully");
      setIsAuth(false);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuth(true);
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <nav className="header">
      <div>
        <h2>Co-Task</h2>
      </div>
      <article>
        <Link to={"/"}style={{ border: "1px solid #2c3e50",borderRadius: "2rem"}}>HOME</Link>
        <Link to={"/profile"}style={{ border: "1px solid #2c3e50",borderRadius: "2rem"}}>PROFILE</Link>
        {isAuth ? (
          <button disabled ={loading} onClick={logoutHandler} className="btn" >LOGOUT</button>
        ) : (
          <Link to={"/login"}style={{ border: "1px #2c3e50",borderRadius: "2rem"}}>LOGIN</Link>
        )}
      </article>
    </nav>
  );
};

export default Header;
