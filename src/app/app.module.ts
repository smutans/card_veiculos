import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NoteService } from './note.service';

export const firebaseConfig = {
  apiKey: "AIzaSyAeLgmb2b-K7ydiJtFaI0phB6c_rzr0-so",
  authDomain: "notablenotes-c48b5.firebaseapp.com",
  databaseURL: "https://notablenotes-c48b5.firebaseio.com",
  projectId: "notablenotes-c48b5",
  storageBucket: "notablenotes-c48b5.appspot.com",
  messagingSenderId: "162170854211",
  appId: "1:162170854211:web:2c57e2fecf61a5856d2df6"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
