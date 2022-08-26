
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Homepage from './Homepage';
import Main from './Main';
import Skill_container from './Skill_container';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='index'>
    <Skill_container />
  </div>
);

