import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';
import { Signup2Page } from '../signup2/signup2';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToCafeDetail(params){
    if (!params) params = {};
    this.navCtrl.push(CafeDetailPage);
  }goToSignup2(params){
    if (!params) params = {};
    this.navCtrl.push(Signup2Page);
  }
}
