import { useState } from 'react'; 
import Alert from 'bootstrap/js/dist/alert';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Bookofthemonth from './components/Bookofthemonth';
import BookResults from './components/BookResults';
// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';

function App() {
      const [searchInput, setSearchInput] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
  
    return (
    <div className = "app">  
        <Nav searchInput={searchInput} setSearchInput={setSearchInput} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <div className={`row ${isDarkMode ? 'bg-dark text-white' : 'light-mode'} `}>
            <div className="col-7">
            <Hero isDarkMode={isDarkMode}/>
            </div>
            <div className="col-5 p-0 d-flex flex-row align-items-center justify-content-center">
            <Bookofthemonth isDarkMode={isDarkMode} />
            </div>
        </div>
        <div className={`row ${isDarkMode ? 'bg-dark text-white' : 'light-mode'} `}>
            <div className="col-12 p-0" id="BookResults">
                <BookResults searchInput={searchInput} setSearchInput={setSearchInput} isDarkMode={isDarkMode}/>
            </div>
        </div> 
    </div>
  );
}

export default App;
