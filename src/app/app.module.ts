import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { MobileAccessibility } from '@ionic-native/mobile-accessibility/ngx';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { IsDebug } from '@ionic-native/is-debug/ngx';
import { SecureStorage } from '@ionic-native/secure-storage/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    ScreenOrientation,
    Insomnia,
    MobileAccessibility,
    GoogleAnalytics,
    IsDebug,
    SecureStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
