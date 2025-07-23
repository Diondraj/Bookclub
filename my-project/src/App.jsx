import { useState, useRef, useEffect } from 'react'; 
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav'
import Hero from './components/Hero'
import Bookofthemonth from './components/Bookofthemonth';
import BookResults from './components/BookResults';
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from './firebase';
import Community from './pages/Community'
import Logins from './pages/Logins';
import Greetings from './components/Greetings'

function App() {
    const [searchInput, setSearchInput] = useState('');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const resultsRef = useRef(null);
    const [user, setUser] = useState(null);
    const [profile, setProfile] = useState(null);
    useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

console.log(user)


useEffect(() => {
  const fetchUserProfile = async () => {
    if (user) {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProfile(docSnap.data());
      } else {
        console.log("No such profile!");
      }
    }
  };

  fetchUserProfile();
}, [user]); // 👈 only runs when user changes

    return (
    <div className = "app">  
     <Nav searchInput={searchInput} setSearchInput={setSearchInput} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} scrollToResults={() => resultsRef.current.scrollIntoView({ behavior: 'smooth' })}/>
    <Routes>
       <Route
            path="/"
            element={
        <>
          {user ? (
         <Greetings profile={profile}/>
                ) : (
          <></>
                )}
          <div className={`row ${isDarkMode ? 'bg-dark text-white' : 'light-mode'} `}>
              <div className="col-7">
              <Hero isDarkMode={isDarkMode} profile={profile}/>
              </div>
              <div className="col-5 p-0 d-flex flex-row align-items-center justify-content-center">
              <Bookofthemonth isDarkMode={isDarkMode} />
              </div>
          </div>
          <div className={`row ${isDarkMode ? 'bg-dark text-white' : 'light-mode'} `}>
              <div className="col-12 p-0" id="BookResults" >
                  <BookResults searchInput={searchInput} setSearchInput={setSearchInput} isDarkMode={isDarkMode} ref={resultsRef}/>
              </div>
          </div>
          
        </>
        }
        />
          {/* Add more internal routes here */}
              <Route path="/community" element={<Community />} />
              <Route path="/LoginSignup" element={<Logins isDarkMode={isDarkMode} user={user}/>} />
        </Routes> 
    </div>
  );
}

export default App;
