import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { QRscanPage } from '../q-rscan/q-rscan';

import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../models/user';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user = {} as User;
  uid: string | null;
  coupons: Observable<any[]>;

  constructor(
    public afstore: AngularFirestore,
    private afAuth: AngularFireAuth,
    public navCtrl: NavController,
    public af: AngularFireDatabase,
    private barcode: BarcodeScanner) {

    this.afAuth.user.subscribe(doc => {
      this.coupons = afstore.collection('customers', ref => ref.where('userID', '==', doc.uid)).valueChanges();
    })
  }

  goToCafeDetail(params) {
    if (!params) params = {};
    this.navCtrl.push(CafeDetailPage);
  }

  ionViewDidLoad() {
    console.log('home.ts loaded');
    console.log('home.ts uid: ' + this.uid);
  }

  onScanClick() {
    this.navCtrl.push(QRscanPage, {}, { animate: false });
  }

}
