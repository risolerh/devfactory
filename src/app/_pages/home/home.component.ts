import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  public slides = [new item, new item, new item];

  constructor() { 
    AOS.init({
      duration: 1500,
      easing: 'ease-in-out-back'
    });
  }

  ngOnInit() {



  }

}

class item {

}
