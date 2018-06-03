import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CafeDetailPage } from '../cafe-detail/cafe-detail';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private qrScanner: QRScanner) {
  }
  goToCafeDetail(params) {
    if (!params) params = {};
    this.navCtrl.push(CafeDetailPage);
  }

  IonViewDidLoad() {
    console.log('home.ts loaded');
  }

  onScanClick() {
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted


          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            alert('Scanned text: ' + text);

            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));
  }
}
