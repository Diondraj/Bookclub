import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';

 export default function Nav({isDarkMode, setIsDarkMode, setSearchInput, searchInput}) {
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
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="nav-link" href="#">Community</a>
                            </li>
                        </ul>
                            <form className="d-flex" role="search" onSubmit={handleSubmit}>
                                <input className="form-control me-2" type="search" aria-label="Search" 
                                placeholder="Search books..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)}/>
                                <button className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'}`} type="submit" onSubmit={handleSubmit} id="topsearchForm">Search</button>
                            </form>
                        <ul className="navbar-nav w-25 d-flex flex-row me-auto justify-content-evenly mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Log in</a>
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
