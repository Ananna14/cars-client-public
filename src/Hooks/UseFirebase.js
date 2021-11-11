import initializeFirebase from "../Pages/Banner/Login/Firebase/Firebase.init";
import React, { useEffect, useState } from 'react'
import { getAuth, updateProfile, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

initializeFirebase()
const UseFirebase = () =>{
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password, name, history) =>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setAuthError(''); 
          const newUser = {email, displayName: name};
          setUser(newUser)
          //save user to the database
          saveUser(email, name);
          history.replace('/');
          })
          .catch((error) => {
            setAuthError(error.message);
            console.log(error)
          })
          .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) =>{
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/purchase';
    history.replace(destination);
    setAuthError('');
  })
  .catch((error) => {
    setAuthError(error.message);
  })
  .finally(() => setIsLoading(false));

    }

//observer user state
    useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    },[])

    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    },[user.email])

const logOut = () =>{
  setIsLoading(true);
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
}

const saveUser = (email, displayName) =>{
  const user = {email, displayName};
  fetch('http://localhost:5000/users',{
    method: 'POST',
    headers: {
      'content-type':'application/json'
    },
    body:JSON.stringify(user)
  })
  .then()
}

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logOut,

    }

}
export default UseFirebase;