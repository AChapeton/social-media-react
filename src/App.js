import React from 'react';
import Header from './components/Header'
import Switch from './components/Switch'
import MainCardsList from './components/MainCardsList'
import Overview from './components/Overview'
import './globals.css';

function App() {
  return (
    //Estructura para Fragment <> </>
    <>
      <Header>
        <Switch/>
      </Header>
      <MainCardsList/>
      <Overview/>
    </>
  );
}

export default App;
