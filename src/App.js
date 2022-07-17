import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from "react-router-dom";
import About from './components/About';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>  {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = ()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");

    }
  }
  return (
    <>
  
    <Router>
      <Navbar title="Whobizz" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/"  element={<Textform showAlert={showAlert} heading="Example textarea" mode={mode}/>} />
        </Routes>
    </Router>
      
    </>
  );
}

export default App;
