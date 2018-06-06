import { IonicPage, Loading, LoadingController, NavController, Alert, AlertController } from 'ionic-angular';
import { Component, Inject } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';
import { SignupPage } from '../signup/signup';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthProvider } from '../../providers/auth/auth';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  user = {} as User;
  public loading:Loading;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public authProvider: AuthProvider) {
  }
  login():void {
      this.authProvider.login(this.user.email, this.user.password).then(authData => {
        this.loading.dismiss().then( ()=> {
          this.navCtrl.setRoot(HomePage);
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

/*  login():void {
    this.authProvider.loginUser(this.user.email, this.user.password).then(authData => {
        this.loading.dismiss().then( ()=> {
          this.navCtrl.setRoot(HomePage);
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
*/
  register() {
    this.navCtrl.push(SignupPage);
  }
}
