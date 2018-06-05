import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController} from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import { User } from '../../models/user';
import { LoginPage } from '../login/login';
import firebase from 'firebase';
import 'firebase/firestore';
import { AuthProvider } from '../../providers/auth/auth';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  user = {} as User;
  public loading: Loading;

  constructor(private afAuth: AngularFireAuth, public authProvider: AuthProvider, public loadingCtrl: LoadingController,
  public navCtrl: NavController, public anvParams: NavParams) {
  }

  register() {
    this.authProvider.signupUser(this.user.email, this.user.password).then( user => {
      this.loading.dismiss().then( () => {
        this.navCtrl.push(SignupPage);
      });
    });
  }
}
