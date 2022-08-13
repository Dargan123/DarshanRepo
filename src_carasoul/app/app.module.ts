import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
//import { NgbdCarouselPause } from './carousel-pause';
// Import statemets for reactive form design
import {FormsModule} from '@angular/forms';

// Import ReactiveFormsModule for reactive forms
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,          // Add names of modules
    ReactiveFormsModule,
    NgbModule
  ],
  exports: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
