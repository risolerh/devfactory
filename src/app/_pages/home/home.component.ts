import { Component, OnInit, ViewEncapsulation, HostListener } from '@angular/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  // tamaño de ventana
  public innerHeight: any;

  public slides = [ 
    new item("slide1.titulo", "slide1.subtitulo", null, "https://previews.123rf.com/images/pumpyvector/pumpyvector1707/pumpyvector170700008/81576154-fondo-de-tecnolog%C3%ADa-abstracta.jpg"),
    new item("slide2.titulo", "slide2.subtitulo", null, "https://www.grupovision.org/wp-content/uploads/2016/04/c-servicios.jpg"),
    new item("slide3.titulo", "slide3.subtitulo", null, "https://media.istockphoto.com/vectors/abstract-hexagon-background-technology-polygonal-concept-vector-id996971400"),
    new item("slide4.titulo", "slide4.subtitulo", null, "https://previews.123rf.com/images/number168/number1681507/number168150700642/42341953-vector-abstracto-futurista-ingenier%C3%ADa-rueda-de-engranaje-en-la-placa-de-circuito-ilustraci%C3%B3n-de-alta-tecn.jpg"),
    new item("slide5.titulo", "slide5.subtitulo", null, "https://previews.123rf.com/images/number168/number1681507/number168150700603/42341230-vector-ilustraci%C3%B3n-de-la-tarjeta-de-circuitos-futurista-abstracto-fondo-de-tecnolog%C3%ADa-de-alta-ordenador-b.jpg"),
    
  ];
 
  /*
   *   Servicios 
   */
  public specialties = [
    new item("web.titulo"             , null, "web.descripcion"               , "web"), 
    new item("inovacion.titulo"       , null, "inovacion.descripcion"         , "wb_incandescent"), 
    new item("capacitacion.titulo"    , null, "capacitacion.descripcion"      , "people"), 
    new item("consultoria.titulo"     , null, "consultoria.descripcion"       , "wb_iridescent"), 
    new item("migracion.titulo"       , null, "migracion.descripcion"         , "swap_horiz"), 
    new item("etl.titulo"             , null, "etl.descripcion"               , "transform"), 
    // new item("bigdata.titulo"         , null, "bigdata.descripcion"           , "storage"), 
    // new item("mineria.titulo"         , null, "mineria.descripcion"           , "find_replace"), 
    // new item("machinelearning.titulo" , null, "machinelearning.descripcion"   , "cast_for_education"), 
    // new item("internetcosas.titulo"   , null, "internetcosas.descripcion"     , "home"), 
    // new item("admon.titulo"           , null, "admon.descripcion"             , "developer_mode"), 
  ]

  public 
  constructor() { 
    AOS.init({
      duration: 3000,
      easing: 'ease-in-out-back'
    });
  }

  ngOnInit() {
    this.innerHeight = window.outerHeight*.70;

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerHeight = window.outerHeight*.70;
    console.log('--> resize: ' + this.innerHeight);
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
