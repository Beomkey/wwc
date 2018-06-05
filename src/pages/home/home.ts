import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { QRscanPage } from '../q-rscan/q-rscan';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

import 'firebase/firestore';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  coupons: Observable<any[]>;

  constructor(
    private afstore: AngularFirestore,
    public navCtrl: NavController, 
    private barcode: BarcodeScanner,
    public auth: AngularFireAuth) {

      // let db = firebase.firestore();
      // auth.user.subscribe(doc => {
      //   this.coupons = db.collection('customers').doc(doc.uid).collection('coupons').get();
      // })
      
      // auth.user.subscribe(doc => {
      //   this.coupons = afstore.collection('Customer').doc(doc.uid).collection('coupons').valueChanges();
      // })
  }
  
  goToCafeDetail(params) {
    if (!params) params = {};
    this.navCtrl.push(CafeDetailPage);
  }

  ionViewDidLoad() {
    console.log('home.ts loaded');
  }

  onScanClick() {
    this.navCtrl.push(QRscanPage, {}, { animate: false });
  }

}
