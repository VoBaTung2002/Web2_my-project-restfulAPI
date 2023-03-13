import { Component } from '@angular/core';

@Component({
  selector: '[app-bai12]',
  templateUrl: './bai12.component.html',
  styleUrls: ['./bai12.component.css']
})
export class Bai12Component {
  productsImage=[
    {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"assets/coke.png"},
    {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"assets/pepsi.png"},
    {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"assets/sting.png"},
    ]
}
