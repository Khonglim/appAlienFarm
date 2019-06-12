import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { Ionic4DatepickerModalComponent } from "@logisticinfotech/ionic4-datepicker";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  loading: boolean = false;
  user: any;
  datauser :any;


  datePickerObjPtBr: any = {};
  datePickerObj: any = {};
  selectedDate;
  mydate = "";
  
  constructor(
    public navCtrl: NavController, 
    private userService: UserService,
    public modalCtrl: ModalController
  ) {
   
  }

  ngOnInit() {
    this.getListdata();
    
    const disabledDates: Date[] = [
      new Date(1545911005644),
      new Date(),
      new Date(2018, 12, 12), // Months are 0-based, this is August, 10th.
      new Date("Wednesday, December 26, 2018"), // Works with any valid Date formats like long format
      new Date("12-14-2018") // Short format
    ];

    // EXAMPLE OBJECT
    this.datePickerObj = {
      // inputDate: new Date('12'), // If you want to set month in date-picker
      // inputDate: new Date('2018'), // If you want to set year in date-picker
      // inputDate: new Date('2018-12'), // If you want to set year & month in date-picker
      inputDate: new Date("2018-12-01"), // If you want to set date in date-picker

      // inputDate: this.mydate,
      // dateFormat: 'yyyy-MM-DD',
      dateFormat: "DD-MM-YYYY",
      // fromDate: new Date('2018-12-08'), // default null
      // toDate: new Date('2018-12-28'), // default null
      // showTodayButton: true, // default true
      // closeOnSelect: false, // default false
      // disableWeekDays: [4], // default []
      // mondayFirst: false, // default false
      // setLabel: 'S',  // default 'Set'
      // todayLabel: 'T', // default 'Today'
      // closeLabel: 'C', // default 'Close'
      // disabledDates: disabledDates, // default []
      titleLabel: "Select a Date", // default null
      // monthsList: this.monthsList,
      // weeksList: this.weeksList,
      momentLocale: "th-TH",
      yearInAscending: true
    };

    this.datePickerObjPtBr = {
      dateFormat: "DD MMM YYYY",
      closeOnSelect: true,
      setLabel: "OK",
      todayLabel: "ตกลง",
      closeLabel: "ยกเลิก",
      titleLabel: "เลือกวันที่",
      monthsList: [
        "Jan",
        "Fev",
        "Mar",
        "Abr",
        "Mai",
        "Jun",
        "Jul",
        "Ago",
        "Set",
        "Out",
        "Nov",
        "Dez"
      ],
      weeksList: ["อ", "จ", "อ", "พ", "พฤ", "ศ", "อ"],
      clearButton: false,
      momentLocale: "th-TH"
    };
  
  }


  async getListdata () 
  {

    this.userService.getListData()
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
   
    this.userService.getListData()
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





  onChangeDate() {
    console.log("onChangeDate date ", this.mydate);
  }

  async openDatePicker() {
      console.log("Open Date PIcker");

    const modalCtrl = await this.modalCtrl.create({
      component: Ionic4DatepickerModalComponent,
      cssClass: "li-ionic4-datePicker",
      componentProps: { objConfig: this.datePickerObjPtBr }
    });
    await modalCtrl.present();

    modalCtrl.onDidDismiss().then(data => {
      // this.isModalOpen = false;
      console.log(data);
      this.selectedDate = data.data.date;
    });
  };











}
