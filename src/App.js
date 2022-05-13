import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Header from './header';
import HomePage from './pages/HomePage'
import SignIn from './signIn/SignIn';
import SignUp from './signUp/signUp';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element ={<HomePage/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='signIn' element={<SignIn/>}/>
      </Routes>
      
    </div>
  );
}

export default App
