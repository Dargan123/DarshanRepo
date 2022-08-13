import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BuginfoComponent } from './buginfo/buginfo.component';
import { PersonalinfoComponent } from './personalinfo/personalinfo.component';
import {MatSelectModule} from '@angular/material/select';
import { StudentModule } from './student/student.module';
import { AdminModule } from './admin/admin.module';
import { ButtonModule } from 'primeng/button';
import { TechnologiesComponent } from './technologies/technologies.component';
import { BooksComponent } from './books/books.component';
import { InvalidComponent } from './invalid/invalid.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { DemoPipe } from './demo.pipe';
import { HelloDirective } from './hello.directive';
import { Hello1Directive } from './hello1.directive';
import { MyRevPipe } from './my-rev.pipe';
import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe';
import { MarvellousChkPipe } from './marvellous-chk.pipe';
import { NewCompComponent } from './new-comp/new-comp.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,  
    BuginfoComponent,
    PersonalinfoComponent,
    TechnologiesComponent,
    BooksComponent,
    InvalidComponent,
    ChildComponent,
    DemoPipe,
    HelloDirective,
    Hello1Directive,
    MyRevPipe,
    MyAddPipe,
    MyMultPipe,
    MarvellousChkPipe,
    NewCompComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ButtonModule,
    FormsModule
    // StudentModule,
    // AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
