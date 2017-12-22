import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

	apiUrl = 'http://localhost/tag/tag-2017/tag-hr/wp-json/acf/v3';
	constructor(public http: HttpClient) {
		// console.log('Hello RestProvider Provider');
	}
	getUsers() {
		return new Promise(resolve => {
			this.http.get(this.apiUrl+'/job-list').subscribe(data => {
				resolve(data);
			}, err => {
			console.log(err);
			});
		});
	}

}
