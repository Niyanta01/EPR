import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListofpatientsComponent } from './listofpatients/listofpatients/listofpatients.component';
import { MenuComponent } from './menu/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    ListofpatientsComponent,
    MenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
