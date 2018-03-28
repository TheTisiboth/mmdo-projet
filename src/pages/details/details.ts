import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
}
