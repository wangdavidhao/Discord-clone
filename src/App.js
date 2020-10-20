import React , {useEffect}from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat.js';

import {useSelector, useDispatch} from 'react-redux';
import {selectUser} from './features/userSlice.js';
import Login from './Login';
import { auth } from './firebase';

import {login, logout} from './features/userSlice';


function App() {

  //Shoot thing into the oignon
  const dispatch = useDispatch();
  //Selector to grab a slice
  const user = useSelector(selectUser);
  console.log(user);

  useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
        if(authUser){

          dispatch(login({
            uid:authUser.uid,
            photo:authUser.photoURL,
            email:authUser.email,
            displayName:authUser.displayName,
          }))

        }else{

          dispatch(logout());

        }
      });
  },[dispatch]);//user if change

  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar></Sidebar>
          <Chat></Chat>
        </>
      ) : ( 
        <Login></Login>
      )}
      
    </div>
  );
}

export default App;
