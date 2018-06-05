import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from '../../models/user';
import { LoginPage } from '../login/login';
import firebase from 'firebase';


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
      let result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      if(result) {
        firebase.database().ref(`/customers/${result.uid}/email`).set(user.email);
      }
    }
    catch (e) {
      console.error(e)
    }
    this.navCtrl.push(LoginPage);
  }
}
