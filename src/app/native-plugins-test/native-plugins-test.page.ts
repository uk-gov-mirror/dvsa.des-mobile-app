import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Insomnia } from '@ionic-native/insomnia/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AlertController } from '@ionic/angular';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';
import { IsDebug } from '@ionic-native/is-debug/ngx';

const { Device, Network, StatusBar } = Plugins;

declare var cordova: any;

@Component({
  selector: 'app-native-plugins-test',
  templateUrl: './native-plugins-test.page.html',
  styleUrls: ['./native-plugins-test.page.scss'],
})
export class NativePluginsTestPage implements OnInit {

  ASAM = false;
  insomniaEnabled = false;
  screenOrientationLocked = false;
  statusBarShowing = true;

  constructor(
    private insomnia: Insomnia,
    private screenOrientation: ScreenOrientation,
    private alertCtrl: AlertController,
    private ga: GoogleAnalytics,
    private isDebug: IsDebug,
  ) { }

  async ngOnInit() {

    await this.startGa();

    this.screenOrientation.onChange().subscribe(
      () => {
          console.log('### Orientation Changed');
      }
   );

  }

  async showAlert(header: string, message: string): Promise<any> {

    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async printCordovaPlugins() {
    if (typeof cordova !== 'undefined') {
      await this.showAlert('Cordova plugins', JSON.stringify(Object.keys(cordova.plugins)));
    } else {
      await this.showAlert('Cordova plugins', 'Cordova is undefined');
    }
  }

  async toggleInsomnia() {
    this.insomniaEnabled ? await this.insomnia.allowSleepAgain() : await this.insomnia.keepAwake();
    await this.showAlert('toggleInsomnia', 'toggleInsomnia done');
  }

  async toggleScreenOrientationLock() {
    console.log(this.screenOrientation.type); // logs the current orientation, example: 'landscape'
    this.screenOrientationLocked ?
      this.screenOrientation.unlock() :
      this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    this.screenOrientationLocked = !this.screenOrientationLocked;
    await this.showAlert('toggleScreenOrientationLock', this.screenOrientationLocked.toString());
  }

  toggleStatusBar() {
    this.statusBarShowing ? StatusBar.hide() : StatusBar.show();
    this.statusBarShowing = !this.statusBarShowing;
  }

  async startGa() {
    try {
      await this.ga.startTrackerWithId('YOUR_TRACKER_ID');
      console.log('Google analytics is ready now');
      this.ga.trackView('test');
      // Tracker is ready
      // You can now track pages or set additional information such as AppVersion or UserId
    } catch (err) {
      console.log('Error starting GoogleAnalytics', err);
    }
  }

  async toggleASAM() {
    this.ASAM = !this.ASAM;
    cordova.plugins.ASAM.toggle(this.ASAM, async (didSucceed: boolean) => {
      const logMessage = `Call to ${this.ASAM ? 'enable' : 'disable'} ASAM ${didSucceed ? 'succeeded' : 'failed'}`;
      await this.showAlert('toggleASAM', logMessage);
      if (!didSucceed) {
        const logError = `${this.ASAM ? 'Enabling' : 'Disabling'} ASAM`;
        await this.showAlert('toggleASAM', logError);
      }
    });
  }

  async toggleIsDebug() {
    this.isDebug.getIsDebug()
    .then(async isDebug => await this.showAlert('toggleIsDebug', `Is app in debug mode ${isDebug}`))
    .catch(async err => await this.showAlert('toggleIsDebug', 'debug mode error'));
  }

  asynctoggleDeviceAuth() {
    cordova.plugins.DeviceAuthentication.runAuthentication(
      'Please enter your passcode',
      async (successful: boolean) => {
        await this.showAlert('asynctoggleDeviceAuth', 'device auth success');
      },
      async () => {
        await this.showAlert('asynctoggleDeviceAuth', 'device auth error');
      });
  }

  async printDeviceInfo() {
    const info = await Device.getInfo();
    await this.showAlert('printDeviceInfo', JSON.stringify(info));
  }

  async printNetworkStatus() {
    const status = await Network.getStatus();
    await this.showAlert('printNetworkStatus', JSON.stringify(status));
  }

  async printMDMConfig() {
    const appConfigPlugin = cordova.plugins.AppConfig;

    const env = {
      configUrl: appConfigPlugin.getValue('configUrl'),
      daysToCacheJournalData: appConfigPlugin.getValue('daysToCacheJournalData'),
      daysToCacheLogs: appConfigPlugin.getValue('daysToCacheLogs'),
      isRemote: true,
      logsAutoSendInterval: appConfigPlugin.getValue('logsAutoSendInterval'),
      authentication: {
        employeeIdKey: appConfigPlugin.getValue('employeeIdKey'),
        logoutUrl: appConfigPlugin.getValue('logoutUrl'),
        redirectUrl: appConfigPlugin.getValue('redirectUrl'),
      },
    };

    await this.showAlert('printMDMConfig', JSON.stringify(env));
  }

}
