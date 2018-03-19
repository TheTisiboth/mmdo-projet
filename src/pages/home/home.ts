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
  results : Result[];

  getItems(ev: any) {
    let val = ev.target.value;
    if (val && val.trim() != '') {
      this.results = fakeResults;
      document.getElementById("noresult").style.display = "none";
    }
    else{
      this.results=[];
      document.getElementById("noresult").style.display = "block";

    }
  }
}

interface Result {
  title: string;
  author: string;
  date: string;
  image: string;
}
const fakeResults :Result[] = [
  {title:'title1',author:'pelo1',date:'01/01/01',image:'path/img1.png'},
  {title:'title2',author:'pelo2',date:'02/02/02',image:'path/img2.png'},
  {title:'title3',author:'pelo3',date:'03/03/03',image:'path/img3.png'}
];

class SearchPage {

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
