import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListofpatientsComponent } from './listofpatients/listofpatients/listofpatients.component';



const routes: Routes = [
  { path: "listOfPatients" , component: ListofpatientsComponent},
  { path: "", redirectTo:"home", pathMatch:"full"},
  { path: "**", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
