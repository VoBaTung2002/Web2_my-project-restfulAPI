import { Component, Input } from '@angular/core';
import { Book } from '../Interfaces/Book';
import { BookAPIService } from '../Services/book-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, Subscription } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: '[app-book-update]',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.css']
})
export class BookUpdateComponent {
  book=new Book();
  books:any
  errMessage:string=''
  selectedProduct:any
  constructor(private activateRoute:ActivatedRoute,private _service:BookAPIService, private router:Router, public http:HttpClient){
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
  putBook(){
    this.book.ngayCapNhat= `${new Date().getDate()}-${new Date().getMonth() + 1}-${new Date().getFullYear()}`
    this._service.putBook(this.book).subscribe({
      next:(data)=>{this.books=data},
      error:(err)=>{this.errMessage=err}
    }),
    this.goBack()
  }

  goBack() {
    this.router.navigate(['books']);
  }

  @Input()
  requiredFileType: any;
  fileName = '';
  uploadProgress: number = 0;
  uploadSub: Subscription = new Subscription();
  image: string = '';
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.fileName = file.name;
      this.book.anhBia = this.fileName;
      const formData = new FormData();
      formData.append('image', file);
      const upload$ = this.http.post('./upload', formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(finalize(() => this.reset()));
      this.uploadSub = upload$.subscribe((event) => {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total!));
        }
      });
    }
  }
  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }
  reset() {
    this.uploadProgress = 0;
    this.uploadSub = new Subscription();
  }
}
