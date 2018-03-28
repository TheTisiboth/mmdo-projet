import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Title } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';
import { DetailsPage } from '../details/details';


@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {

	constructor(public navCtrl: NavController) {
		this.detailspage = DetailsPage;
		this.results = [];
	}
	detailspage: any;
	params: Result;
	results: Result[];

	getItems(ev: any) {
		let val = ev.target.value;

		if (val != null && val!='') {
			val = val.trim().replace(' ', '-'); //trim() : supprime les espaces en début et fin de caracteres
			this.results = fakeResults;

		}
		else {
			this.results = [];

		}
	}
}

interface Result {
	title: string;
	author: string;
	date: string;
	image: string;
}
const fakeResults: Result[] = [
	{ title: 'title1', author: 'pelo1', date: '01/01/01', image: 'http://via.placeholder.com/101x101' },
	{ title: 'title2', author: 'pelo2', date: '02/02/02', image: 'http://via.placeholder.com/102x102' },
	{ title: 'title3', author: 'pelo3', date: '03/03/03', image: 'http://via.placeholder.com/103x103' }
];


