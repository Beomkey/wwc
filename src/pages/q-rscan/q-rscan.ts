import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';

import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import 'firebase/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import { Coupon } from '../../models/coupon';

@IonicPage()
@Component({
  selector: 'page-q-rscan',
  templateUrl: 'q-rscan.html',
})




export class QRscanPage {
  cafes: any = [
    'Dads Cafe',
    'My Cafe',
    'Yourbeans', //etc...
  ];

  coups: any;

  str: string;
  options: BarcodeScannerOptions;
  results: any;
  constructor(public navCtrl: NavController,
    private barcode: BarcodeScanner,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    public af: AngularFireDatabase) {

  }

  init(cafe: string) {
    this.coups = [];
    var db = firebase.firestore();
    var uid = firebase.auth().currentUser.uid;
    var coupsRef = db.collection(`Customer/${uid}/coupons`);
    var coups = coupsRef.get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.coups.push({ cafe: doc.data().cafe, stemps: doc.data().stemps });
          if(doc.data().cafe == cafe){
            this.coups = {cafe: doc.data().cafe, stemps: doc.data().stemps};
          }
          console.log(doc.id, '=>', doc.data());
        });
      })
      .catch(err => {
        console.log('Error getting documents', err);
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QRscanPage');
    this.scanQRcode();
  }

  async scanQRcode() {
    this.options = {
      prompt: 'Scan the QR code to stamp on the coupon!'
    }
    this.results = await this.barcode.scan(this.options);
    console.log(this.results);
    this.str = this.results.text


    if (this.cafes.includes(this.str)) {
      this.navCtrl.push(CafeDetailPage, {
        qrcode: this.str
      });
    }
    else {
      this.presentAlert('Invalid QR code!!');
      this.navCtrl.push(HomePage, {}, { animate: false });
    }
  }

  presentAlert(str) {
    let alert = this.alertCtrl.create({
      title: 'Alert',
      subTitle: str,
      buttons: ['Dismiss']
    });
    alert.present();
  }
}
