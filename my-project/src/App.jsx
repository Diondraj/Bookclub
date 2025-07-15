import { useState } from 'react'; 
import Alert from 'bootstrap/js/dist/alert';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Bookofthemonth from './components/Bookofthemonth';
// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    return (
    <div className = "app">  
        <Nav isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <div className={`row ${isDarkMode ? 'bg-dark text-white' : 'light-mode'} `}>
            <div className="col-6">
            <Hero isDarkMode={isDarkMode}/>
            </div>
            <div className="col-6 d-flex flex-row align-items-center justify-content-center">
            <Bookofthemonth isDarkMode={isDarkMode}/>
            </div>
        </div>
        <div className={`row ${isDarkMode ? 'bg-dark text-white' : 'light-mode'} `}>
            <div className="col-6">
            <div className="p-4 border text-center">3</div>
            </div>
            <div className="col-6">
            <div className="p-4 border text-center">4</div>
            </div>
        </div> 
    </div>
  );
}

export default App;
