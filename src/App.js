import React,{useEffect} from 'react';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Mail from './Components/Mail';
import EmailList from './Components/EmailList';
import SendMail from './Components/SendMail';
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser,login } from './features/userSlice';
import Login from './Components/Login';
import { auth } from './Firebase/Firebase';
function App() {
  const sendMessageIsOpen=useSelector(selectSendMessageIsOpen)
  const user=useSelector(selectUser)
  const dispatch=useDispatch()
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user)
      {
        dispatch(login({
          displayName:user?.displayName,
          email:user?.email,
          photoUrl:user?.photoURL
        }))
      }
    })
  },[])
  return (
    <Router>
      {!user?(<Login></Login>):
      <div className="app">
          <Header></Header>
          <div className='app__body'>
            <Sidebar></Sidebar>
            <Switch>
              <Route path="/mail">
                <Mail></Mail>
              </Route>
              <Route path="/">
                <EmailList></EmailList>
              </Route>
            </Switch>
          </div>
          {sendMessageIsOpen && <SendMail></SendMail>}
      </div>
  }
        
    </Router>
    
  );
}

export default App;
