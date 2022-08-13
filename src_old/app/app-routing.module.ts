import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { InvalidComponent } from './invalid/invalid.component';
import { TechnologiesComponent } from './technologies/technologies.component';

const routes: Routes = [
  // {path:'admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
  // {path:'student',loadChildren:()=>import('./student/student.module').then(m=>m.StudentModule)},
  // // {path:",redirectTo",pathMatch:'full'}
{path:'books',component: BooksComponent},
{path:'technologies',component: TechnologiesComponent},
{path:'**',component:InvalidComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
