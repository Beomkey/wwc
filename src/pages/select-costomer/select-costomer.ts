import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';
import { StartWithCodePage } from '../start-with-code/start-with-code';

@Component({
  selector: 'page-select-costomer',
  templateUrl: 'select-costomer.html'
})
export class SelectCostomerPage {

  constructor(public navCtrl: NavController) {
  }
  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }
  goToCafeDetail(params){
    if (!params) params = {};
    this.navCtrl.push(CafeDetailPage);
  }
  goToStartWithCode(params){
    if (!params) params = {};
    this.navCtrl.push(StartWithCodePage);
  }
}
