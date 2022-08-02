import { Component, OnInit } from '@angular/core';
import { LibraryserviceService } from '../libraryservice.service';
@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {

  constructor(private libser:LibraryserviceService) { }
  allbooks:any;
  ngOnInit(): void {
    this.allbooks=this.libser.getallbooks()
    console.log(this.allbooks)
  }
  
}
