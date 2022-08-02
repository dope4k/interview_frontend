import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import { BooklistComponent } from './booklist/booklist.component';
import { StudentdetailComponent } from './studentdetail/studentdetail.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

const routes: Routes = [
  {path:'',component:BooklistComponent},
  {path: 'bookdetail/:id', component: BookdetailComponent},
  {path: 'booklist', component: BooklistComponent},
  {path: 'studentdetail/:id', component: StudentdetailComponent},
  {path: 'studentlist', component: StudentlistComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  
}
