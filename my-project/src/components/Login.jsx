// src/components/Login.jsx
import React, { useState } from 'react';
import {doc, setDoc} from 'firebase/firestore';
import { auth, googleProvider, db } from '../firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  const loginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  const register = async () => {

    try {
      const userCredential =  await createUserWithEmailAndPassword(auth, email, password);
      
      const user = userCredential.user;

      //writing additional user data to Firestore
      await setDoc(doc(db, "users", user.uid),{
        email,
        firstName,
        lastName,
        username,
        phone,
        createdAt: new Date()
      });
      alert("Your account has been made! Welcome to bookclub.")
      console.log("User registered and profile saved.");

    } catch (err) {
      console.error(`error registering user: ${err}`);
      alert(err.message);
    }
  };

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google!");
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
  <div className="vh-100 d-flex flex-row justify-content-center align-items-center">
    <div className="w-50 d-flex flex-column justify-content-center align-items-center mb-3" style={{ padding: '2rem' }}>
      <h2>Login to Book Club</h2>
      
        <input
          className="p-1 m-3 w-25"
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
       <input
        className="p-1 m-3 justify-content-center align-self-center"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <div className="p-1 mx-3">
        <button className="mx-3 btn btn-primary text-white" onClick={loginWithEmail}>Login with Email</button>
        <button className="btn btn-primary text-white" onClick={loginWithGoogle}>Login with Google</button>
      </div>
    </div>

      <div class="w-50 d-flex flex-column justify-content-center align-items-center mb-3">
        <h2> Sign up for a Book Club account</h2>
        <div>
          <input
          className="p-1 m-3"
          type="text"
          placeholder="First Name"
          onChange={(e) => setfirstName(e.target.value)}
          value={firstName} />
        
          <input
          className="p-1 m-3"
          type="text"
          placeholder="Last Name"
          onChange={(e) => setlastName(e.target.value)}
          value={lastName} />
        </div>
        
        
          <input
            className="p-1 m-3 w-50"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div>
            <input
            className="p-1 m-3"
            type="tel"
            placeholder="Phone number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone} />
        
            <input
            className="p-1 m-3"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}/>
          </div>
        <br />
        <input
          className="p-1 m-3"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
          <br />
        <button className="btn btn-primary text-white" onClick={register}>Sign up</button>
        <br />
       
      </div>

      

     
     
  </div>
  );
};

export default Login;
