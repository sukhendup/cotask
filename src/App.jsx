import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { Context, server } from "./main";

function App() {
  const{setUser,setIsAuth,setLoading,user} = useContext(Context);
  useEffect(()=>{
    setLoading(true);
    axios.get(`${server}/users/me`,{
      withCredentials : true,
    }).then((res)=>{
      setIsAuth(true);
      setUser(res.data.user);
      setLoading(false);
    }).catch((error)=>{
      // console.log(error);
      setIsAuth(false);
      setUser({});
      setLoading(false);
    })
  },[]);
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
