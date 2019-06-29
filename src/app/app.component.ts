import { Component } from '@angular/core';
import { Platform, MenuController, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from '../app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  [x: string]: any;

  public appPages = [
    {
      title: 'หน้าแรก',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'รายการเข้า-ออกโรงเรียน',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'ตารางเรียน',
      url: '/class-schedule',
      icon: 'journal'
    },
    {
      title: 'ผลการเรียน',
      url: '/grade-report',
      icon: 'attach'
    },
    {
      title: 'ประชาสัมพันธิ์',
      url: '/public-relations',
      icon: 'megaphone'
    }, {
      title: 'อาจารย์ประจำชั้น',
      url: '/floor-teacher',
      icon: 'person'
    },
    {
      title: 'ติดต่อโรงเรียน',
      url: '/contact-school',
      icon: 'school'
    },
    {
      title: 'แจ้งปัญหาการใช้งานแอพ',
      url: '/report-problems',
      icon: 'build'
    },



    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menuCtrl: MenuController,
    public navCtrl: NavController,
    private authService: AuthService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  logout () {
    this.authService.removeCredentials();
    setTimeout(() => {
      this.menuCtrl.enable(false);
      this.navCtrl.navigateRoot('/auth');
    }, 750)
  }
}
