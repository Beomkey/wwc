import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SelectModePage } from '../pages/select-mode/select-mode';
import { SelectCostomerPage } from '../pages/select-costomer/select-costomer';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { ManagerLoginPage } from '../pages/manager-login/manager-login';
import { Signup2Page } from '../pages/signup2/signup2';
import { Home2Page } from '../pages/home2/home2';
import { StartWithCodePage } from '../pages/start-with-code/start-with-code';
import { CafeDetailPage } from '../pages/cafe-detail/cafe-detail';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { QRscanPage } from '../pages/q-rscan/q-rscan';
import { Cafe1Page } from '../pages/cafe1/cafe1';
import { Cafe2Page } from '../pages/cafe2/cafe2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireFunctionsModule } from 'angularfire2/functions';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    MyApp,
    SelectModePage,
    SelectCostomerPage,
    LoginPage,
    SignupPage,
    HomePage,
    ManagerLoginPage,
    Signup2Page,
    Home2Page,
    StartWithCodePage,
    CafeDetailPage,
    QRscanPage,
    Cafe1Page,
    Cafe2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AngularFireFunctionsModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SelectModePage,
    SelectCostomerPage,
    LoginPage,
    SignupPage,
    HomePage,
    ManagerLoginPage,
    Signup2Page,
    Home2Page,
    StartWithCodePage,
    CafeDetailPage,
    QRscanPage,
    Cafe1Page,
    Cafe2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}