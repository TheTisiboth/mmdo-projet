import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    this.results = [];
  }
  results: Result[];

  getItems(ev: any) {
    let val = ev.target.value;
    val = val.trim(); //supprime les espaces en début et fin de caracteres
    val = val.replace(' ', '-');
    if (val== '') {
      this.results = [];
      document.getElementById("noresult").style.display = "block";
    }
    else {
      this.results = fakeResults;
      document.getElementById("noresult").style.display = "none";
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
  { title: 'title1', author: 'pelo1', date: '01/01/01', image: 'path/img1.png' },
  { title: 'title2', author: 'pelo2', date: '02/02/02', image: 'path/img2.png' },
  { title: 'title3', author: 'pelo3', date: '03/03/03', image: 'path/img3.png' }
];


