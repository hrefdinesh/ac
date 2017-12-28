import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import {Slides} from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	@ViewChild(Slides) private slides: Slides;

	constructor(public navCtrl: NavController) {

  	}

   public ngOnInit() {

 //   	this.slides.effect = 'coverflow';
 //    this.slides.centeredSlides = true;
 //    this.slides.slidesPerView = 'auto';
 //    this.slides.coverflow = {
	// 	rotate: 50,
	// 	stretch: 0,
	// 	depth: 100,
	// 	modifier: 1,
	// 	slideShadows : true,
	// },

    // this.slides.effect = 'coverflow';
    // this.slides.centeredSlides = true;
    // this.slides.slidesPerView = 3;

    // this.slides.coverflow = {
    //   rotate: 50,
    //   stretch: 0,
    //   depth: 0,
    //   modifier: 1,
    //   slideShadows: true,
    // }
  }

}