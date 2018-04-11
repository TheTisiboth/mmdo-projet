import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Title } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { DetailsPage } from '../details/details';
import { HttpClient } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { api_key } from "../../app/tmdb";
import { pluck } from 'rxjs/operator/pluck';
import { AsyncPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { AlertController } from 'ionic-angular';
import { Shake } from "@ionic-native/shake";
import { Subscription } from "rxjs/Subscription";
import { Platform } from "ionic-angular";

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	constructor(public navCtrl: NavController, public http: HttpClient, public alertCtrl: AlertController, public platform: Platform, public shake: Shake) {
		this.detailspage = DetailsPage;
		this.results = Observable.of([]);
	}
	shakeSubscription: Subscription;
	detailspage: any;
	params: Result;
	results: Observable<Result[]>;

	getItems(ev: any) {
		let val: string = ev.target.value;

		if (val != null && val != "") {
			val = val.trim().replace(' ', '-'); //trim() : supprime les espaces en début et fin de caracteres
			this.results = this.fetchResults(val);
		}
		else {
			this.results = Observable.of([]);
		}
	}

	fetchResults(name: string): Observable<Result[]> {
		const url: string = "https://api.themoviedb.org/3/search/movie";
		return this.http.get<Result[]>(url, { params: { api_key: api_key, query: name, language: 'fr' } }).pluck('results');
	}

	discoverMovies(): Observable<Result[]> {
		const url = "https://api.themoviedb.org/3/discover/movie";
		return this.http.get<Result[]>(url, { params: { api_key: api_key, language: 'fr', primary_release_year: "2018" } }).pluck('results');
	}

	showRandomMovieAlert(movies: Result[]): void {
		var movie = movies[Math.floor(Math.random() * movies.length)];
		let confirm = this.alertCtrl.create({
			title: movie.title,
			message: movie.overview,
			buttons: [
				{
					text: 'Cancel',
				},
				{
					text: 'Details',
					handler: () => {
						this.navCtrl.push(this.detailspage, movie);
					}
				}
			]
		});
		confirm.present();
	}

	ionViewDidEnter(): void {
		this.shakeSubscription = Observable.fromPromise(this.platform.ready())
			.switchMap(() => this.shake.startWatch())
			.switchMap(() => this.discoverMovies())
			.subscribe(movies => this.showRandomMovieAlert(movies));
	}

	ionViewWillLeave(): void {
		this.shakeSubscription.unsubscribe();
	}

}

export interface Result {
	id: string;
	title: string;
	original_title: string;
	original_language: string;
	overview: string;
	poster_path: string;
	release_date: string;
}



