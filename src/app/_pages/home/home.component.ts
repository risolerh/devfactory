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


  public slides = [ 
    new item(null, null, null, null),
    new item(null, null, null, null),
    new item(null, null, null, null) 
  ];
 
  /*
   *  
   */
  public specialties = [
    new item("migracion.titulo",       null, "migracion.descripcion",       "trending_up" ),
    new item("inovacion.titulo",       null, "inovacion.descripcion",       "graphic_eq" ),
    new item("web.titulo",             null, "web.descripcion",             "web" ),
    new item("medicion.titulo",        null, "medicion.descripcion",        "wb_incandescent" ),
    new item("admon.titulo",           null, "admon.descripcion",           "widgets" ),
    new item("machinelearning.titulo", null, "machinelearning.descripcion", "library_add" ),
    new item("internetcosas.titulo",   null, "internetcosas.descripcion",   "settings_system_daydream" ),
  ]

  public 
  constructor() { 
    AOS.init({
      duration: 3000,
      easing: 'ease-in-out-back'
    });
  }

  ngOnInit() {

  }

}


class item {
  
  public title : string; 
  public subtitle : string;
  public description : string;
  public img : string;

  constructor(title, subtitle, description, img) {
    this.title = title;
    this.subtitle = subtitle;
    this.description = description
    this.img  = img; 
  }
  
}
