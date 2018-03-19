import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Title } from '@angular/platform-browser';
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
    val = (val.trim()).replace(' ', '-'); //trim() : supprime les espaces en début et fin de caracteres
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


<<<<<<< HEAD
=======
  searchQuery: string = '';
  items: string[];

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota'
    ];
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
>>>>>>> c1bc47bf936d319de309c6b2a428ddd313f4dfdf
