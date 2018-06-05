import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

@Component({
  selector: 'page-cafe-detail',
  templateUrl: 'cafe-detail.html'
})
export class CafeDetailPage {

  cafe: string;
  constructor(public navCtrl: NavController, public params: NavParams) {
    this.cafe = params.get('data');
    
  }
  
}
