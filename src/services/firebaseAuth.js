import firebase from './firebaseService';


const auth = firebase.auth();
const firebaseAuth = () => {


    const registerUser = (email, pass) => {
        return auth.createUserWithEmailAndPassword(email, pass);
    }

    const signInUser = (email, pass) => {
        return auth.signInWithEmailAndPassword(email, pass);
    }

    const loggoutUser = () => {
        return auth.signOut();
    }

    return {
        registerUser, signInUser, loggoutUser
    }

}
export default firebaseAuth;