import { firebase } from '@nativescript/firebase';

firebase.getCurrentPushToken()
    .then(token => {
        console.log('TOKEN FIREBASE:', token);
    });
