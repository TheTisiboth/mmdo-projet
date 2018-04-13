import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Result } from '../home/home';
import { HttpClient } from '@angular/common/http';
import { api_key } from '../../app/tmdb';
import { Observable } from "rxjs/Observable";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


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

	constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private sanitizer: DomSanitizer) {
		//parametre passé a la détailspage : nom du film, date, etc
		this.param = this.navParams.data;
		//partie de l'url de la video
		this.urlvideo = this.fetchVideoUrl(this.param.id);
	}
	param: Result;
	urlvideo: Observable<SafeResourceUrl>;

	/**
	 * Cette fonction renvoie une partie de l'url de la video
	 * @param id  : id du film
	 */
	fetchVideoUrl(id: string): Observable<SafeResourceUrl> {
		const url: string = 'http://api.themoviedb.org/3/movie/' + id + '/videos';
		return this.http.get<video[]>(url, { params: { api_key: api_key } })
			.pluck('results')
			.map((videos: video[]) => {
				for (let video of videos) {
					if (video.site === 'YouTube') {
						return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.key+"?autoplay=1");
					}
				}
				return null;
			});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetailsPage');
	}
}

interface video {
	key: string;
	site:string;
}
