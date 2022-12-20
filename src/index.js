import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './Nav';
import Allpups from './Allpups';
import App from './App';

const Main = () => {
  return (
    <>
     <div className='title'>
    <h1>Welcome to Puppy Bowl</h1>
    </div>
    <Nav />
    <Allpups />
    </>
  )

}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

