import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Cafe1Page } from '../cafe1/cafe1';
import { Cafe2Page } from '../cafe2/cafe2';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-q-rscan',
  templateUrl: 'q-rscan.html',
})
export class QRscanPage {
  str: string;
  options: BarcodeScannerOptions;
  results: any;
  constructor(public navCtrl: NavController, private barcode: BarcodeScanner, public navParams: NavParams, private alertCtrl: AlertController) {
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

    if (this.str == 'cafe1')
      this.navCtrl.push(Cafe1Page, {}, { animate: false });
    else if (this.str == 'cafe2') {
      this.navCtrl.push(Cafe2Page, {}, { animate: false });
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
