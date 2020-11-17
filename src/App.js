import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Regiser from './pages/Register'
import Introduce from './pages/Introduce'
import List from './pages/List'
import UpdateLog from './pages/UpdateLog'
import MyPage from './pages/MyPage'


function App() {
  return (
    <>  
      <Route component = {Introduce} path = '/' exact />
      <Route component = {Login} path = '/login'/>
      <Route component = {Regiser} path = '/register' />
      <Route component = {List} path = '/List' />
      <Route component = {UpdateLog} path = '/@username:postId' />
      <Route component = {MyPage} path = '/:@username'/>
      
    </>
  );
}

export default App;
