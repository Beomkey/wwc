import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToCafeDetail(params){
    if (!params) params = {};
    this.navCtrl.push(CafeDetailPage);
  }
}
