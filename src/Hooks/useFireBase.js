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
    // const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    // new user registration
    const registerNewUser = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {

                setUserName()

                console.log(result.user);
                window.location.reload();

            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    // set user name 
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then((result) => {

                setUser(result.user);
            }).catch((error) => {

            });
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

        return signInWithPopup(auth, googleProvider)

    }
    // facebook sign in controlller 
    const signInWithFacebook = () => {
        return signInWithPopup(auth, facebookProvider)

    }
    // github signin control 
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)

    }
    // microsoft sign in provider 
    const signInWithMicrosoft = () => {
        return signInWithPopup(auth, microsotfProvider)

    }

    // log out control 
    const logOut = () => {

        signOut(auth)
            .then(() => {
                setUser({});

            })

            .catch((error) => {

            })

    }

    // observe user state change
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {

                setUser(user);
            }
            else {
                setUser({})
            }

        });

    }, [])

    return { user, signInWithgoogle, logOut, signInWithFacebook, signInWithMicrosoft, signInWithGithub, setName, setEmail, setPassword, registerNewUser, handleResetPath, processLogin, verifyEmail, setUserName }
}
export default useFireBase;