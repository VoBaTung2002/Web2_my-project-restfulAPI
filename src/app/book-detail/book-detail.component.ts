import { Component } from '@angular/core';
import { BookAPIService } from '../Services/book-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: '[app-book-detail]',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {
  book:any;
  errMessage:string=''
  constructor(private activateRoute:ActivatedRoute,private _service:BookAPIService, private router:Router){
    activateRoute.paramMap.subscribe(
      (param)=>{
        let id=param.get('id')
        if(id!=null)
          {
            this.searchBook(id)
          }
      }
    )
  }
  searchBook(bookId:string){
    this._service.getBook(bookId).subscribe({
      next:(data)=>{this.book=data},
      error:(err)=>{this.errMessage=err}
    })
  }
  goBack() {
    this.router.navigate(['books']);
  }
}
