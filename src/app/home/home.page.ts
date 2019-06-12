import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  loading: boolean = false;
  user: any;
  datauser :any;


  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private userService: UserService
    ) { 

      this.getUser();
     
    }
    ngOnInit() {
      
     
    }
  
    async getUser () 
    {
      this.loading = true;
      this.userService.getUserInfo()
        .then(async (response: any) => {
          this.loading = false;
          this.user = response;
          console.log(response);
        })
        .catch(async err => {
          this.loading = false;
          const alert = await this.alertController.create({ header: 'ผิดพลาด',
          message:'คุณยังไม่ได้เข้าระบบค่ะ', buttons: ['OK']  });
          this.navCtrl.navigateRoot('/auth');
          await alert.present();
        })
    }


 
    






}
