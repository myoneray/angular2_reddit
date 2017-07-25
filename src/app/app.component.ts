import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // showDiv: boolean;
  // hidenDiv: boolean;

  constructor() {
    // this.showDiv = true;
    // this.hidenDiv = false;
  }

  showDiv() {
    return true;
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding  Article title: ${title.value} and  link: ${link.value}`);
    return false;
  }



}
