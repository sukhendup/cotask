import React, { useContext } from 'react'
import { Context} from "../main";
import Loader from '../components/Loader';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Profile = () => {
  const {isAuth,loading,user,count} = useContext(Context)
  // if (!isAuth) return <Navigate to={"/login"} />;
  return loading ? (<Loader />) :(
      <div className='pro'>
          <h1>Username : {user?.name}</h1>
          <h3>E-mail : {user?.email}</h3>
      </div>
  );
};

export default Profile
