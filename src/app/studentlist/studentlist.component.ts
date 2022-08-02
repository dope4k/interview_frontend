import { Component, OnInit } from '@angular/core';
import { LibraryserviceService } from '../libraryservice.service';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  constructor(private lib:LibraryserviceService) { }
  students:any;
  ngOnInit(): void {
    this.students=this.lib.getallstudents()
    console.log(this.students)
  }

}
