import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryserviceService } from '../libraryservice.service';
@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private lib: LibraryserviceService) { }
  edit=false;
  donefunc()
  {
    this.edit=false;
    this.lib.editbook(this.ida,this.Name,this.Author,this.BorrowedBy,this.DateOfBorrow,this.ExpectedReturnDate)
  }
  editfunc()
  {
    this.edit=true;
  }
  Name:any='Amazing Life';
  Author:any='Tahir Bilal';
  BorrowedBy:any='Tariq Khan';
  DateOfBorrow:any='21 August, 2021';
  ExpectedReturnDate:any='20 August,2022';
  Book:any;
  ida:any;
  students:any;
  ngOnInit(): void {
    this.students=this.lib.getallstudents()
    this.activatedRoute.params.subscribe(params => {
      this.ida=params['id'];
      let id = params['id'];
      this.Book=this.lib.getspecificbook(id)
      this.Name=this.Book.Name;
      this.Author=this.Book.Author;
      this.BorrowedBy=this.Book.BorrowedBy;
      this.DateOfBorrow=this.Book.DateOfBorrow;
      this.ExpectedReturnDate=this.Book.ExpectedReturnDate;
      });
  }

}
