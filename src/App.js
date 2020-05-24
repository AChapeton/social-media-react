import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import Switch from './components/Switch'
import MainCardsList from './components/MainCardsList'
import Overview from './components/Overview'
import './globals.css';

function App() {
  
  const [darkMode, setDarkMode] = useState(false)
  const [checked, setChecked] = useState(false);
  const mainClass = darkMode ? 'is-dark-mode' : 'is-light-mode'

  function changeMedia(mq){
    setDarkMode(mq.matches)
    setChecked(mq.matches)   
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    mq.addListener(changeMedia)
    setDarkMode(mq.marches)
    setChecked(mq.matches)   
  }, [])


  return (
    //Estructura para Fragment <> </>
    <main className={mainClass}>
      <Header>
        <Switch 
          setDarkMode={setDarkMode} 
          checked={checked} 
          setChecked={setChecked}/>
      </Header>
      <MainCardsList/>
      <Overview/>
    </main>
  );
}

export default App;
