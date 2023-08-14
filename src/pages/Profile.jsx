import React, { useContext } from 'react'
import { Context} from "../main";
import Loader from '../components/Loader';
import { Navigate } from 'react-router-dom';
const Profile = () => {
  const {loading,user} = useContext(Context)
  return loading ? (<Loader />) :(
      <div className='pro'>
          <h1>Username: {user?.name}</h1>
          <h3>E-mail : {user?.email}</h3>
      </div>
  );
};

export default Profile
