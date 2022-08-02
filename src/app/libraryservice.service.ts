import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibraryserviceService {
  Bookdata=[
    {Id:1,Name:'Amazing Life',Author:'Tahir Bilal',BorrowedBy:'-',DateOfBorrow:'-',ExpectedReturnDate:'-'},
    {Id:2,Name:'JavaScript Basics',Author:'Akram Khan',BorrowedBy:'-',DateOfBorrow:'-',ExpectedReturnDate:'-'},
    {Id:3,Name:'Plants & Earth',Author:'Minhas Khan',BorrowedBy:'-',DateOfBorrow:'-',ExpectedReturnDate:'-'},
    {Id:4,Name:'Tiger',Author:'Jon Jones',BorrowedBy:'-',DateOfBorrow:'-',ExpectedReturnDate:'-'},
  ]
  Studentdata=[
    {Id:1,FirstName:'Bilal',LastName:'Khattak'},
    {Id:2,FirstName:'Ali',LastName:'Ahsan'}
  ]
  constructor() { }
  getallbooks()
  {
    return this.Bookdata
  }
  getallstudents()
  {
    return this.Studentdata
  }
  getspecificbook(id:any)
  {
    for(let x in this.Bookdata)
    {
      if(this.Bookdata[x].Id==id)
      {
        return this.Bookdata[x]
      }
    }
    return;
  }
  editbook(id:any,N:any,A:any,BB:any,DB:any,ER:any)
  {
    for(let x in this.Bookdata)
    {
      if(this.Bookdata[x].Id==id)
      {
        this.Bookdata[x].Name=N;
        this.Bookdata[x].Author=A;
        this.Bookdata[x].BorrowedBy=BB;
        this.Bookdata[x].DateOfBorrow=DB;
        this.Bookdata[x].ExpectedReturnDate=ER;
      }
    }
  }
  getspecificstudent(id:any)
  {
    for(let x in this.Studentdata)
    {
      if(this.Studentdata[x].Id==id)
      {
        return this.Studentdata[x]
      }
    }
    return;
  }
  editstudent(id:any,F:any,L:any)
  {
    for(let x in this.Studentdata)
    {
      if(this.Studentdata[x].Id==id)
      {
        this.Studentdata[x].FirstName=F;
        this.Studentdata[x].LastName=L;
      }
    }
  }
}
