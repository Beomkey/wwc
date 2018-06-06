import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { QRscanPage } from '../q-rscan/q-rscan';

import { AngularFireDatabase} from 'angularfire2/database';
import firebase from 'firebase';
import 'firebase/firestore';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  coups: Array<Object> = [];

  constructor(public navCtrl: NavController, public af: AngularFireDatabase, private barcode: BarcodeScanner) {
    this.coups = [
    ]

    let db = firebase.firestore();
    let uid = firebase.auth().currentUser.uid;

    var coupsRef = db.collection(`Customer/${uid}/coupons`);
    var coups = coupsRef.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        this.coups.push({cafe: doc.data().cafe, stemps: doc.data().stemps});
        console.log(doc.id, '=>', doc.data());
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }
  goCoupDetails(theCoup: any) {
    this.navCtrl.push(CafeDetailPage, { coup: theCoup });
  }


  onScanClick(){
    this.navCtrl.push(QRscanPage, {}, { animate: false });
  }
  
}
