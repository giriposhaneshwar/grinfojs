import firebase from './firebaseService';


const auth = firebase.auth();

const registerUser = (email, pass) => {
    return auth.createUserWithEmailAndPassword(email, pass);
}

const signInUser = (email, pass) => {
    return auth.signInWithEmailAndPassword(email, pass);
}

const loggoutUser = () => {
    return auth.signOut();
}

const firebaseAuth = {
    registerUser, signInUser, loggoutUser
};

export default firebaseAuth;