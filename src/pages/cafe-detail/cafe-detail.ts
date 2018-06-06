import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Coupon } from '../../models/coupon';
import { HomePage } from '../home/home';

import { AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import 'firebase/firestore';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'page-cafe-detail',
  templateUrl: 'cafe-detail.html'
})
export class CafeDetailPage {
  coupInfo = {} as Coupon;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.coupInfo = navParams.data.coup;
  }
  useCoupon() {
    if (this.coupInfo.stemps<10) {
      const alert = this.alertCtrl.create({
        title: 'Cannot use!',
        subTitle: 'You can use coupon collected at least 10 stemps',
        buttons: ['OK']
      });
      alert.present();
    }
    else {
      let db = firebase.firestore();
      let uid = firebase.auth().currentUser.uid;

      var stempsRef = db.collection(`Customer/${uid}/coupons/`);
      db.collection(`Customer/${uid}/coupons`).doc(`${this.coupInfo.cafe}`).set({
        cafe: this.coupInfo.cafe,
        stemps: this.coupInfo.stemps-10
      }).then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
        return;
       });
       const alert = this.alertCtrl.create({
        title: 'Used!',
        subTitle: 'Coupon is used succesly',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.setRoot(HomePage);  
    }
  }  
}