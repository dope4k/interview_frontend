import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibraryserviceService } from '../libraryservice.service';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  ida:any;
  constructor(private activatedRoute: ActivatedRoute, private lib: LibraryserviceService) { }
  edit=false;
  donefunc()
  {
    this.edit=false;
    this.lib.editstudent(this.ida,this.First_Name,this.Last_Name);

  }
  editfunc()
  {
    this.edit=true;
  }
  First_Name:any='Ahmad';
  Last_Name:any='Ali';
  Student:any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.ida=params['id'];
      let id = params['id'];
      this.Student=this.lib.getspecificstudent(id)
      this.First_Name=this.Student.FirstName;
      this.Last_Name=this.Student.LastName;
      });
  }
  

}
