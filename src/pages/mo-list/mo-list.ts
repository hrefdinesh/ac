import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  templateUrl: 'navigation-details.html',
})
export class NavigationDetailsPage {
  item;

  constructor(params: NavParams) {
    this.item = params.data.item;
  }
}



@Component({
  selector: 'mo-list',
  templateUrl: 'mo-list.html'
})
export class moList {
  selectedItem: any;
  items : any;
  users: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {  
    

    let url = "http://localhost/tag/href/acwp/wp-json/acf/v3/movie-list";

    this.http.get(url).subscribe(data => {
         this.items = data;
        console.log("Success : " + this.items);
      },
      err => {
        console.error("Error : " + err);
      },
      () => {
        // this.loading.dismiss();
        console.log('Loading completed');

    });
    
  }

  openNavDetailsPage(item) {
    this.navCtrl.push(NavigationDetailsPage, { item: item });
  }

}
