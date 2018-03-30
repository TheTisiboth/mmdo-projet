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

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	constructor(public navCtrl: NavController, public http: HttpClient) {
		this.detailspage = DetailsPage;
		this.results = Observable.of([]);
	}
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

  fetchResults(name: string): Observable<Result[]>{
    const url: string = "https://api.themoviedb.org/3/search/movie";
    return this.http.get<Result[]>(url, {params: {api_key: api_key, query: name,language: 'fr'}}).pluck('results');
  }
}

export interface Result {
  id: string;
	title: string;
  original_title: string;
  original_language: string;
  overview: string;
  poster_path: string;
}



