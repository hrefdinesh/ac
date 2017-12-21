import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	users: any;
	constructor(public navCtrl: NavController, public restProvider: RestProvider) {
		this.getUsers();
	}
	getUsers() {
	this.restProvider.getUsers()
		.then(data => {
			this.users = data;
			console.log(this.users);
		});
	}
}