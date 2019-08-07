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
    new item("migracion.titulo"       , null, "migracion.descripcion"         , ""), 
    new item("inovacion.titulo"       , null, "inovacion.descripcion"         , ""), 
    new item("web.titulo"             , null, "web.descripcion"               , ""), 
    new item("bigdata.titulo"         , null, "bigdata.descripcion"           , ""), 
    new item("etl.titulo"             , null, "etl.descripcion"               , ""), 
    new item("mineria.titulo"         , null, "mineria.descripcion"           , ""), 
    new item("machinelearning.titulo" , null, "machinelearning.descripcion"   , ""), 
    new item("internetcosas.titulo"   , null, "internetcosas.descripcion"     , ""), 
    new item("admon.titulo"           , null, "admon.descripcion"             , ""), 
    new item("capacitacion.titulo"    , null, "capacitacion.descripcion"      , ""), 
    new item("consultoria.titulo"     , null, "consultoria.descripcion"       , ""), 
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
