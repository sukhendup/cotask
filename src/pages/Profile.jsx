import React, { useContext } from 'react'
import { Context} from "../main";
import Loader from '../components/Loader';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';
const Profile = async () => {
  const {isAuth,loading,user} = useContext(Context)
  return loading ? (<Loader />) :(
      <div className='pro'>
          <h1>{user?.name}</h1>
          <h3>{user?.email}</h3>
      </div>
  );
};

export default Profile
