import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/*
 * Modules
 */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { MatSelectModule , MatFormFieldModule, MatStepperModule
       , MatToolbarModule,  MatIconModule, MatMenuModule }  from '@angular/material';


/*
 * Component
 */
import { AppComponent } from './app.component';
import { HomeComponent } from './_pages/home/home.component';

//Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
 
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [ HttpClient ]
      }
    }),
     /* material */
     BrowserAnimationsModule, MatToolbarModule, MatStepperModule, MatSelectModule,
     MatFormFieldModule, MatIconModule, MatMenuModule

  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
