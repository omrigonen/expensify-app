import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCHYj8eE1ZiuuVwWLtiJqCsHWeeAYJEEvc",
    authDomain: "expensify-874d2.firebaseapp.com",
    databaseURL: "https://expensify-874d2.firebaseio.com",
    projectId: "expensify-874d2",
    storageBucket: "expensify-874d2.appspot.com",
    messagingSenderId: "356507218682"
};


firebase.initializeApp(config);

firebase.database().ref().set({
    name: 'Omri Gonen',
    age: 34,
    isSingle:false,
    location:{
        city:'nes tziona',
        state: 'Israel'
    }
}).then(()=>{
    console.log('data is saved!');
}).catch(()=>{
    console.log('something went wrong!');
});
  
firebase.database().ref('attributes').set(
    {
        height:189,
        weight: 98
    }
).then((e) => {
    console.log('cool we did it');
}).catch((e) => {
    console.log('error',e);
});