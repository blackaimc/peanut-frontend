import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Regiser from './pages/Register'
import Introduce from './pages/Introduce'
import List from './pages/List'
import UpdateLog from './pages/UpdateLog'
import MyPage from './pages/MyPage'
import EasterGaram from './pages/Eastergaram';


function App() {
  return (
    <>  
      <Route component = {Introduce} path = '/' exact />
      <Route component = {Login} path = '/login'/>
      <Route component = {Regiser} path = '/register' />
      <Route component = {List} path = '/List' />
      <Route component = {UpdateLog} path = '/@username:postId' />
      <Route component = {MyPage} path = '/write'/>
      <Route component = {EasterGaram} path = '/abc1203928392898993310dhfuhfauafhua123932919dhj1h2hj32j'/>
      
    </>
  );
}

export default App;
//https://0ebf8b2425f4.ngrok.io/abc1203928392898993310dhfuhfauafhua123932919dhj1h2hj32j