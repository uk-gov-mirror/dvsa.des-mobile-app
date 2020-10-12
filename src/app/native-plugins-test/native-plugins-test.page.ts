import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Device, Network } = Plugins;

declare var cordova: any;

@Component({
  selector: 'app-native-plugins-test',
  templateUrl: './native-plugins-test.page.html',
  styleUrls: ['./native-plugins-test.page.scss'],
})
export class NativePluginsTestPage implements OnInit {

  ASAM = false;

  constructor() { }

  ngOnInit() {
  }

  toggleASAM() {
    this.ASAM = !this.ASAM;
    cordova.plugins.ASAM.toggle(this.ASAM, (didSucceed: boolean) => {
      const logMessage = `Call to ${this.ASAM ? 'enable' : 'disable'} ASAM ${didSucceed ? 'succeeded' : 'failed'}`;
      console.log(logMessage);
      if (!didSucceed) {
        const logError = `${this.ASAM ? 'Enabling' : 'Disabling'} ASAM`;
        console.error(logError);
      }
    });
  }

  toggleIsDebug() {
    cordova.plugins.IsDebug.getIsDebug(() => {
      console.log('Detected that app is running in debug mode');
    }, (err: any) => {
      console.error('debug mode error');
    });
  }

  toggleDeviceAuth() {
    cordova.plugins.DeviceAuthentication.runAuthentication(
      'Please enter your passcode',
      (successful: boolean) => {
        console.log('device auth success');
      },
      () => {
        console.log('device auth error');
      });
  }

  async printDeviceInfo() {
    const info = await Device.getInfo();
    console.log(info);
  }

  async printNetworkStatus() {
    const status = await Network.getStatus();
    console.log(status);
  }

}
