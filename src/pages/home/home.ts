import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Title } from '@angular/platform-browser';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  results: Resultat[];

  constructor(public navCtrl: NavController) {
    this.results = [];
  }

  getItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.results = fakeResults;
      document.getElementById("noResult").style.display = "none";
    }else{
      this.results = [];
      document.getElementById("noResult").style.display = "block";
    }
  }
}

export interface Resultat {
  title: string;
  author: string;
  date: string;
  image: string;
}

const fakeResults: Resultat[] = [
  {title: "Bonjour", author: "Loic", date: "14/03/18", image: "url 1"},
  {title: "Wesh", author: "alors", date: "aujourd'hui", image: "url 2"},
  {title: "on", author: "m'appelle", date: "l'OVNI", image: "url 3"}  
];