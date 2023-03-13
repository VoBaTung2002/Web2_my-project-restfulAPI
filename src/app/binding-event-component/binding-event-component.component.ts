import { Component } from '@angular/core';

@Component({
  selector: '[app-binding-event-component]',
  templateUrl: './binding-event-component.component.html',
  styleUrls: ['./binding-event-component.component.css']
})
export class BindingEventComponentComponent {
  onClick(event:any){
    alert(event.pointerId)
  }
  onSubmit(value:string){
    alert(value)
  }

  a: number= 0;
  b: number= 0;

  Cong() {
    alert(this.a + this.b);
  }
  Tru() {
    alert(this.a - this.b);
  }
  Nhan() {
    alert(this.a * this.b);
  }
  Chia() {
    if (this.b === 0) {
      alert('Nhập lại mẫu số');
    } else {
      alert(this.a / this.b);
    }
  }
  xoaTrang(){
    this.a = 0;
    this.b = 0;
  }

}
