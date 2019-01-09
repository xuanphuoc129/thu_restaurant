import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ComponentsModule } from '../components/components.module';
import { HttpModule } from '@angular/http';
import { AppModuleProvider } from '../providers/app-module/app-module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    ComponentsModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      scrollPadding: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AppModuleProvider
  ]
})
export class AppModule {}
