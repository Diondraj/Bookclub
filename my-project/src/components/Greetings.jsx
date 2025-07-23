import { auth} from '../firebase';
export default function Greetings({ profile }) {
    console.log(profile.username)
  return (
    <div>
   
        <h2>Hi, {profile.username}</h2>
        
      <button onClick={() => auth.signOut()}>Go to dashboard</button>
    </div>
  );
}
