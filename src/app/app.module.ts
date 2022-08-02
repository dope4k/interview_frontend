import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BooklistComponent } from './booklist/booklist.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BookdetailComponent,
    BooklistComponent,
    StudentlistComponent,
    StudentdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
