import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Result } from '../home/home';
import { HttpClient } from '@angular/common/http';
import { api_key } from '../../app/tmdb';
import { Observable } from "rxjs/Observable";
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

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
		//parametre passé a la détailspage : nom du film, date, etc
		this.param = this.navParams.data;
		//partie de l'url de la video
		// this.urlvideo = this.fetchVideoUrl(this.param.id);
	}
	param: Result;
	urlvideo: Observable<video>;

	/**
	 * Cette fonction renvoie une partie de l'url de la video
	 * @param id  : id du film
	 */
	fetchVideoUrl(id: string): Observable<video> {
		const url: string = "http://api.themoviedb.org/3/movie/" + id + "/videos";
		return this.http.get<any>(url, { params: { api_key: api_key } }).pluck('results');

	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetailsPage');
	}
}

interface video {
	key: string;
}
