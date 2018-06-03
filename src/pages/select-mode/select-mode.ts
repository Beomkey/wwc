import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectCostomerPage } from '../select-costomer/select-costomer';
import { LoginPage } from '../login/login';
import { HomePage } from '../home/home';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';
import { Signup2Page } from '../signup2/signup2';
import { StartWithCodePage } from '../start-with-code/start-with-code';

@Component({
  selector: 'page-select-mode',
  templateUrl: 'select-mode.html'
})
export class SelectModePage {

  constructor(public navCtrl: NavController) {
  }
  goToSelectCostomer(params){
    if (!params) params = {};
    this.navCtrl.push(SelectCostomerPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(LoginPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(HomePage);
  }goToCafeDetail(params){
    if (!params) params = {};
    this.navCtrl.push(CafeDetailPage);
  }goToSignup2(params){
    if (!params) params = {};
    this.navCtrl.push(Signup2Page);
  }goToStartWithCode(params){
    if (!params) params = {};
    this.navCtrl.push(StartWithCodePage);
  }
}
