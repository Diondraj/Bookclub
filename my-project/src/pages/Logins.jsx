import LoginComponent from '../components/Login'
 export default function Logins({isDarkMode, user}) {

  return (
   <div className={`row ${isDarkMode ? 'bg-dark text-white' : 'light-mode'} `}>
     { !user ? <LoginComponent /> : <h2>Dashboard</h2>}
   </div>
        
  )
}