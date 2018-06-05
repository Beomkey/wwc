import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import firebase from 'firebase';

@Injectable()
export class AuthProvider {

  constructor() {
    console.log('Hello AuthProvider Provider');
  }

  login(email:string, password:string):Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  
  signupUser(email:string, password:string):Promise<any> {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then( newUser => {
    }).catch( error => console.error(error) );
    }

  resetPassword(email:string):Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }
  logoutUser():Promise<void> {
    const userId:string = firebase.auth().currentUser.uid;
    firebase.database().ref(`/userProfile/${userId}`).off();
    return firebase.auth().signOut();
  }
}