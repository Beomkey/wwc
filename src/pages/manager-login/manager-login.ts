import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Signup2Page } from '../signup2/signup2';

@Component({
  selector: 'page-manager-login',
  templateUrl: 'manager-login.html'
})

export class ManagerLoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToSignup2(params){
    if (!params) params = {};
    this.navCtrl.push(Signup2Page);

  }
  
}
