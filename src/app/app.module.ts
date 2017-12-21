import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AboutPage } from '../pages/about/about';

import { moList } from '../pages/mo-list/mo-list';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ParallaxModule } from 'ionic-parallax';

import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';


import { NavigationDetailsPage } from '../pages/mo-list/mo-list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    moList,
    ListPage,
    AboutPage,
    HelloIonicPage,
    NavigationDetailsPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ParallaxModule,
    IonicModule.forRoot(MyApp,{
      mode: 'md'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    moList,
    ListPage,
    AboutPage,
    HelloIonicPage,
    NavigationDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
