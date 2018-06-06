import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import firebase from 'firebase';
import 'firebase/firestore';
import { ManagerLoginPage } from '../manager-login/manager-login';
import { AuthProvider } from '../../providers/auth/auth';
import { Home2Page } from '../home2/home2'

@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html'
})
export class Signup2Page {
  manager_email:string;
  manager_password:string;
  cafe_address:string;
  cafe_name:string;
  public loading: Loading;


  constructor(private afAuth: AngularFireAuth, public authProvider: AuthProvider, public loadingCtrl: LoadingController,
    public navCtrl: NavController, public anvParams: NavParams) {
  }

  async registerManager(manager_email:string, manager_password:string, cafe_name: string, cafe_address: string){
    try{
      console.log(manager_email, manager_password, cafe_name, cafe_address);

      firebase.auth().createUserWithEmailAndPassword(manager_email, manager_password)
      .then( newUser => {
            
        let db = firebase.firestore();
        db.collection("CafeManager").doc(firebase.auth().currentUser.uid).set({
          cafe : cafe_name,
          email : manager_email,
          address : cafe_address
        }).then((data) =>{
          console.log(data)
        }).catch((error)=>{
          console.log
        })        
        this.navCtrl.push(ManagerLoginPage);

        
      }).catch( error => console.error(error) );
  
    }
    catch(e){
      console.error(e)
    }
  }

}
