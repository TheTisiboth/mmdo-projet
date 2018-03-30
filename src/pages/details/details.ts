import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Result} from '../home/home';

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-details',
	templateUrl: 'details.html',
})
export class DetailsPage {

<<<<<<< HEAD
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.param = this.navParams.data;
  }
  param: Result;

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }
=======
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.param = {
			title: this.navParams.get("title"),
			author: this.navParams.get("author"),
			date: this.navParams.get("date"),
			image: this.navParams.get("image")
		};
	}
	param: Result;

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetailsPage');
	}

}

interface Result {
	title: string;
	author: string;
	date: string;
	image: string;
>>>>>>> 5d6ddf18e59e9b1e0ff3970e157c708c819ace72
}
