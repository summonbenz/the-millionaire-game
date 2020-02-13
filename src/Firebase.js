import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCf-e8hXEa9e-f6PZivhTeMr-8CZtjNkWg",
    authDomain: "the-millionaire-41e7b.firebaseapp.com",
    databaseURL: "https://the-millionaire-41e7b.firebaseio.com/",
    projectId: "the-millionaire-41e7b",
    storageBucket: "YOUR_STORAGE_BUCKET"
};
firebase.initializeApp(config);
export default firebase;