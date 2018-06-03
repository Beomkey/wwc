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
    CafeDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    CafeDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}