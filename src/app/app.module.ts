import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirebaseAppConfig, AngularFireModule } from 'angularfire2';
import { SignupPage } from '../pages/signup/signup';
import { UserService } from '../providers/user/user.service';
import { AngularFireDatabase } from 'angularfire2/database';


const firebaseAppConfig: FirebaseAppConfig = { //configurações para o firebase -> https://console.firebase.google.com/project/ionic1729firebase-chat/overview
    apiKey: "AIzaSyDXE-GF2bSlUu02nM0q0nfDMXS5NLmYUzU",
    authDomain: "ionic1729firebase-chat.firebaseapp.com",
    databaseURL: "https://ionic1729firebase-chat.firebaseio.com",
    storageBucket: "ionic1729firebase-chat.appspot.com",
    messagingSenderId: "196373471608"
};

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        SignupPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireModule.initializeApp(firebaseAppConfig)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        SignupPage,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        UserService,
        AngularFireDatabase,
    ]
})
export class AppModule {}
