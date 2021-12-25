import InitFirebas from "../Firebase/firebase.init";
import { signInWithPopup, getAuth, onAuthStateChanged, signOut,createUserWithEmailAndPassword, signInWithEmailAndPassword,updateProfile, FacebookAuthProvider, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


InitFirebas()
const useFirebase = () => {
    let [user, setUser] = useState({});
    let [error, setError] = useState('');
    let [isloading, setIsLoading] = useState(false)

    let location = useLocation();
    let history = useNavigate();

    let redirect_uri = location.state?.form || '/';

    const FacbookProvaider = new FacebookAuthProvider();

    const GoogleProvider = new GoogleAuthProvider();
    const GitProvider = new GithubAuthProvider();
    const auth = getAuth();

    let handleGooglelogin = () => {
        setIsLoading(true)
        signInWithPopup(auth, GoogleProvider)
            .then(res => {
                console.log(res.user);
                setUser(res.user);
                history(redirect_uri)
                setError('')
            }).catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    let signInWithFacebook = ()=>{
        signInWithPopup(auth, FacbookProvaider)
            .then(res => {
                console.log(res.user);
                setUser(res.user);
                history(redirect_uri)
                setError('')
            }).catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }
    let signInWithGitHub = ()=>{
        signInWithPopup(auth, GitProvider)
            .then(res => {
                console.log(res.user);
                setUser(res.user);
                history(redirect_uri)
                setError('')
            }).catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    let SignUpWithEmail  =(email,password,name)=>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth,email,password)
        .then(res=>{
            updateProfile(auth.currentUser,{
                displayName:name
            }).then(()=>{
                setError('')
                history('/login')
                console.log(res.user);
            })
        })
        .catch(error=>{
            setError(error.message)
        }).finally(() => setIsLoading(false))
        
    }
    let SignInWithEmail =(email,password)=>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth,email,password)
        .then(res=>{
            setUser(res.user)
            setError('')
            history(redirect_uri)
            console.log(res.user);
        })
        .catch(error=>[
            setError(error.message)
        ]).finally(() => setIsLoading(false))
    }
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({}); //for useEffect
                setError("");
                console.log("logout seccess!");
            })
            .finally(() => setIsLoading(false))
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        setIsLoading(false);
    }, [auth])

    return {
        logOut,
        user,
        handleGooglelogin,
        isloading,
        error,
        SignUpWithEmail,
        SignInWithEmail,
        setError,
        signInWithFacebook,
        signInWithGitHub
    }
}

export default useFirebase;