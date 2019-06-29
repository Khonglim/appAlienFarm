import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { ModalController } from "@ionic/angular";
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  loading: boolean = false;
  user: any;
  datauser :any;
  public searchTerm: string = "";

  public searchControl: FormControl;

  public items: any;
  searching: any = false;
  constructor(
    public navCtrl: NavController, 
    private userService: UserService,
    public modalCtrl: ModalController,
   
  ) {
    this.searchControl = new FormControl();
  }

  ngOnInit() {
    this.searching = true;
    this.searchControl.valueChanges
      .pipe(debounceTime(700))
      .subscribe(search => {
        this.searching = false;
        this.setFilteredItems();
      });
  
  }
  onSearchInput(){
    this.searching = true;
}
  setFilteredItems() {
    this.items = this.userService.getListData(this.searchTerm)
    .then(async (response: any) => {
      this.loading = false;
      this.datauser = response;
      console.log(response);
    })
    .catch(async err => {
      console.log(err);
    })
  }






  doRefresh(event) {
    console.log('Begin async operation');
   
    this.userService.getListData(this.searchTerm)
      .then(async (response: any) => {
        this.loading = false;
        this.datauser = response;
        event.target.complete();
        console.log(response);
      })
      .catch(async err => {
        console.log(err);
      }) 
  }
















}
