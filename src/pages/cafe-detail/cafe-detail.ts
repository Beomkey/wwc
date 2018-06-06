import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-cafe-detail',
  templateUrl: 'cafe-detail.html'
})
export class CafeDetailPage {
  coupInfo: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.coupInfo = navParams.data.coup;

  }
  
}
