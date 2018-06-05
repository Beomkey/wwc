import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { QRscanPage } from '../q-rscan/q-rscan';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private barcode: BarcodeScanner) {
  }
  goToCafeDetail(params) {
    if (!params) params = {};
    this.navCtrl.push(CafeDetailPage);
  }

  IonViewDidLoad() {
    console.log('home.ts loaded');
  }
  onScanClick(){
    this.navCtrl.push(QRscanPage, {}, { animate: false });
  }
  
}
