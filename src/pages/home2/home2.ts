import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import firebase, { database } from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
import { ManagerLoginPage } from '../manager-login/manager-login';
import { AuthProvider } from '../../providers/auth/auth';
import { DataSnapshot } from '@firebase/database';
import { FirebaseAuth } from '@firebase/auth-types';


@Component({
  selector: 'page-home2',
  templateUrl: 'home2.html'
})


export class Home2Page {

  cafename:string;
  cafeaddress:string;
  idnow:string;
  

  constructor(private afAuth: AngularFireAuth, public authProvider: AuthProvider, public loadingCtrl: LoadingController,
    public navCtrl: NavController, public navParams: NavParams) {

      let db = firebase.firestore();
      this.idnow=navParams.get('keyid');

      db.collection("CafeManager").doc(this.idnow).get().then(
        result => {this.cafename=result.get('cafe');
        this.cafeaddress=result.get('address');
        if (this.cafename==null){
          this.navCtrl.push(ManagerLoginPage);
        }
        console.log(this.cafename);
        })

  }


  deleteCafe(){
    let db = firebase.firestore();

    db.collection("CafeManager").doc(this.idnow).delete();
    firebase.auth().currentUser.delete();
    this.navCtrl.push(ManagerLoginPage);

  }

  ionViewDidLoad(){
    console.log('home2.ts loaded');
  }
}
