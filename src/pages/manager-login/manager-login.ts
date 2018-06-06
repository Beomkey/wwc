import { IonicPage, Loading, LoadingController, NavController, Alert, AlertController } from 'ionic-angular';
import { Component, Inject } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Home2Page } from '../home2/home2';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';
import { SignupPage } from '../signup/signup';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';
import { Signup2Page } from '../signup2/signup2';
import firebase from 'firebase'

@Component({
  selector: 'page-manager-login',
  templateUrl: 'manager-login.html'
})

export class ManagerLoginPage {
  m_email:string;
  m_password:string;
  public loading:Loading;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public authProvider: AuthProvider) {
  }
  login(m_email: string, m_password: string) {
      this.authProvider.login(m_email, m_password).then(authData => {
        this.loading.dismiss().then( ()=> {
          this.navCtrl.push(Home2Page, { keyid : firebase.auth().currentUser.uid } );
        });
      }, error => {
        this.loading.dismiss().then( () => {
          const alert:Alert = this.alertCtrl.create({
            message: error.message,
            buttons: [{ text: "OK", role: 'cancel'}]
          });
          alert.present()
        });
      });
      this.loading = this.loadingCtrl.create();
      this.loading.present()
  }
  goToSignup2(params){
    if (!params) params = {};
    this.navCtrl.push(Signup2Page);

  }
  
}
