import { Component } from '@angular/core';
import { BookAPIService } from '../Services/book-api.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-books]',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books:any;
  errMessage:string=''
  constructor(private _service: BookAPIService, private router:Router){
    this._service.getBooks().subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  delete(f:any){
    this._service.deleteBook(f).subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  createBook() {
    this.router.navigate(['books/book-new']);
  }

  viewDetail(f: any) {
    this.router.navigate(['books/book-new', f.sachID]);
  }

  updateBook(f: any) {
    this.router.navigate(['books/book-update', f.sachID]);
  }

  deleteBook(sachID: any) {
    if (window.confirm('Bạn có chắc muốn xóa cuốn sách này?')) {
      this.delete(sachID);
    }
  }
}

