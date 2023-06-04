import { createContext, useEffect, useState } from "react";
import  {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import app from "../Config/firebase.config";
export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children})=>{
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    const signUp = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name) => {
        console.log(name);
        return updateProfile(auth.currentUser, {
            displayName: name,
            
        })
    }
    const logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
    const googleSignIn= ()=>{
        return signInWithPopup(auth, googleProvider)
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{
            setUser(currentuser)
            setLoading(false)
        })
        return () => unsubscribe()
    },[])
    const AuthInfo = {
        signUp,
        signIn,
        updateUser,
        logout,
        loading,
        setLoading,
        user,
        setUser,
        googleSignIn

    }
    return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
}
export default AuthProvider