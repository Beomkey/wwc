import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';


@IonicPage()
@Component({
  selector: 'page-q-rscan',
  templateUrl: 'q-rscan.html',
})



export class QRscanPage {
  cafes: any = [
    'Hisbeans',
    'Ediya',
    'Moms Cafe', //etc...
  ];
  
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

    if (this.cafes.includes(this.str)){
      this.navCtrl.push(CafeDetailPage, {
        data: this.str
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
