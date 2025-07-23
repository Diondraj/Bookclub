import { Routes, Route, Link } from 'react-router-dom';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';



 export default function Nav({isDarkMode, setIsDarkMode, setSearchInput, searchInput, scrollToResults}) {
     const toggleTheme = () =>{
        setIsDarkMode(prev => !prev)
    }


  const handleSubmit = (e) => {
    e.preventDefault();

    const wordsArray = searchInput.trim().split(' ');
    const updatedInput = wordsArray.join('+');

    console.log('Input:', searchInput);
    console.log('Updated:', updatedInput);

    setSearchInput(updatedInput); // Function passed down via props
  };

  return (
   <div>
     <nav className={`navbar navbar-expand-lg ${
            isDarkMode ? 'dark-mode text-white' : 'light-mode text-dark'}`}>
                <div className="container-fluid">
                        <img 
                        className="navbar-brand"
                        src="/BookClubLogo.png"
                        href="#"
                         />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav w-25 d-flex flex-row justify-content-evenly me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/community">Community</Link>
                            </li>
                        </ul>
                            <form className="d-flex" role="search" onSubmit={handleSubmit}>
                                <input className="form-control me-2" type="search" aria-label="Search" 
                                placeholder="Search books..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                                <button className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'}`} type="submit" onClick={scrollToResults} onSubmit={handleSubmit} id="topsearchForm">Search</button>
                            </form>
                        <ul className="navbar-nav w-25 d-flex flex-row me-auto justify-content-evenly mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/LoginSignup">Sign up / Login</Link>
                            </li>
                        </ul>
                       {isDarkMode ? (
                        <FaSun
                            size={30}
                            onClick={toggleTheme}
                            style={{ cursor: 'pointer', color: '#FFFFFF' }}
                        />
                          
                        ) : (
                            <FaMoon
                            size={30}
                            onClick={toggleTheme}
                            style={{ cursor: 'pointer', color: '#FFA500' }}
                        />
                        )}
                        </div>
                    </div>
        </nav>
        
   </div>
        
  )
}
