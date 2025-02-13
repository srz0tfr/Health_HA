import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyCjXd8geWbwt965xPN01lk4pspAQn0b9jE",
    authDomain: "healthcare-assistant-a1fcf.firebaseapp.com",
    databaseURL: "https://healthcare-assistant-a1fcf-default-rtdb.firebaseio.com",
    projectId: "healthcare-assistant-a1fcf",
    storageBucket: "healthcare-assistant-a1fcf.appspot.com",
    messagingSenderId: "305150964264",
    appId: "1:305150964264:web:3c6406c75f8ef9c0eebb1d"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }
    
    /*** Authentication  ***/
    doCreateUserWithEmailAndPassword = (email, password) => 
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) => 
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => 
        this.auth.signOut();

    doPasswordReset = email => 
        this.auth.sendPasswordResetEmail(email);
    
    /*** Database ***/
    user = uid => this.db.ref(`users/${uid}`);
    users = () => this.db.ref('users');

    addActivity = (uid, activity) => {
        const ref = this.db.ref().child(`users/${uid}/activities`);
        ref.push(activity);
    };

    updateActivity = (uid, activity, activityKey) => {
        const ref = this.db.ref().child(`users/${uid}/activities/${activityKey}`);
        ref.update(activity);
    }
}

export default Firebase;