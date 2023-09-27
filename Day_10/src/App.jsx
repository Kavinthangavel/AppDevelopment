import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Dashboard from './Pages/Dashboard';
import Faq from './Pages/Faq';
import Feedback from './Pages/Feedback';
import Privacy from './Pages/Privacy';
import Terms from './Pages/Terms';
import AnimeVoting from './Pages/AnimeVoting';
import PollForm from './Pages/PollForm';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
        <Route path='/AnimeVoting' element={<AnimeVoting/>}/>
        <Route path='/PollForm' element={<PollForm/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Faq' element={<Faq/>}/>
        <Route path='/Feedback' element={<Feedback/>}/>
        <Route path='/Privacy' element={<Privacy/>}/>
        <Route path='/Terms' element={<Terms/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;