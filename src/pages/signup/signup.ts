import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from '../../models/user';
import { LoginPage } from '../login/login';
import firebase from 'firebase';
import 'firebase/firestore';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user = {} as User;

  constructor(private afAuth: AngularFireAuth,
  public navCtrl: NavController, public anvParams: NavParams) {
  }
  async register(user: User) {
    try {
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if(result) {
        let db = firebase.firestore();
        db.collection("Customer").add({
          email: user.email
        }).then((data)=> {
          console.log(data)
        }).catch((error)=>{
          console.log
        })
      }
    }
    catch (e) {
      console.error(e)
    }
    this.navCtrl.push(LoginPage);
  }
}
