import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  segment: string = "login";
  loading: any;
  formLogin: any = {
    name: '',
    password: '',
  };

  constructor(public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private authService: AuthService) { 

  
    }

  ngOnInit() {
    this.checkAuthenticated();
  
    this.menuCtrl.enable(false);
  }


  async checkAuthenticated ()
  {
    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
        this.menuCtrl.enable(true);
        this.navCtrl.navigateRoot('/home');
        
        console.log(isAuthenticated);
      }else{
        this.menuCtrl.enable(false);
        this.navCtrl.navigateRoot('/auth');
      }
    } catch (err) {
      console.log(err);
   
    }
  }

  async doLogin (data: any)
  {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 2000,
      message: 'Please wait...'
     
    });
    await loading.present();
    this.authService.login(data)
      .then(async (response: any) => {
        
        this.authService.storeCredentials(response);
        setTimeout(() => {
          this.checkAuthenticated()
        }, 750);
      })
      .catch(async err => {
        
        if ( err.status == 400 ) {
          const alert = await this.alertController.create({ header: 'Error',
        message:`${err.error.hint}`, buttons: ['OK']  });
        await loading.dismiss();
        await alert.present();
        }else if (err.status == 401) {
          const alert = await this.alertController.create({ header: 'Error',
          message:`${err.error.message}`, buttons: ['OK']  });
          await loading.dismiss();
          await alert.present();
        } else {
          const alert = await this.alertController.create({ header: 'ผิดพลาด',
          message:'ไม่สามารถติดต่อฐานข้อมูลได้', buttons: ['OK']  });
          await loading.dismiss();
          await alert.present();  
        } 


      
      })
  }




}
