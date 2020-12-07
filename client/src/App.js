import React from 'react';
import { Router } from '@reach/router';
import Main from './views/Main';
import Detail from './views/detail';
import './App.css';
import Update from './views/update'

function App() {
  return (
    <div className="App">
      <Router>
      <Main path="/"/>
      <Detail path="/people/:id" />
      <Update path ="/people/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;



