import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, FacebookAuthProvider, GithubAuthProvider, OAuthProvider, createUserWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import initialAuthentication from "../FireBase/Firebase.init";
initialAuthentication();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();
const microsotfProvider = new OAuthProvider('microsoft.com');

const useFireBase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    // new user registration
    const registerNewUser = (e) => {
        e.preventDefault();
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // set user name 
    const setUserName = () => {
        return updateProfile(auth.currentUser, { displayName: name })
    }
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser)
    }
    // reset password 
    const handleResetPath = (e) => {
        e.preventDefault();

        sendPasswordResetEmail(auth, email)
            .then(result => {
            })
    }
    // email pass log in 
    const processLogin = (e) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    // google sign in contrl 
    const signInWithgoogle = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)

    }
    // facebook sign in controlller 
    const signInWithFacebook = () => {
        setIsLoading(true);
        return signInWithPopup(auth, facebookProvider)

    }
    // github signin control 
    const signInWithGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider)

    }
    // microsoft sign in provider 
    const signInWithMicrosoft = () => {
        setIsLoading(true);
        return signInWithPopup(auth, microsotfProvider)

    }

    // log out control 
    const logOut = () => {
        setIsLoading(true);

        signOut(auth)
            .then(() => {
                setUser({});

            }).finally(() => setIsLoading(false))

            .catch((error) => {

            })

    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    return { user, signInWithgoogle, logOut, signInWithFacebook, signInWithMicrosoft, signInWithGithub, setName, setEmail, setPassword, registerNewUser, handleResetPath, processLogin, verifyEmail, setUserName, setIsLoading, isLoading }
}
export default useFireBase;