import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import datepickerpopup from 'angular-ui-bootstrap/src/datepickerPopup';


@NgModule({
  declarations: [
    AppComponent,
    datepickerpopup
   ],
  imports: [
    BrowserModule,
    datepickerpopup
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { 

}
