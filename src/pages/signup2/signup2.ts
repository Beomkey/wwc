import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import firebase from 'firebase';
import { User } from '../../models/user';
import 'firebase/firestore';
import { ManagerLoginPage } from '../manager-login/manager-login';

@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html'
})
export class Signup2Page {
  user = {} as User;
  cafe_address:string;
  cafe_name:string;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, public anvParams: NavParams) {
  }

  async registerManager(user: User, cafe_name: string, cafe_address: string){
    try{
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
      console.log(result);
      if(result){
        let db = firebase.firestore();
        db.collection("CafeManager").add({
          name : cafe_name,
          email : user.email,
          address : cafe_address
        }).then((data) =>{
          console.log(data)
        }).catch((error)=>{
          console.log
        })        
      }
    }
    catch(e){
      console.error(e)
    }
    this.navCtrl.push(ManagerLoginPage);
  }

}
