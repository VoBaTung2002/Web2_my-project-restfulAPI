import { Component } from '@angular/core';

@Component({
  selector: '[app-bai11]',
  templateUrl: './bai11.component.html',
  styleUrls: ['./bai11.component.css']
})
export class Bai11Component {
  products= [
    {
      productID: "123",
      productName: "Thuốc trị Xàm",
      price: "300",
      productImage: "./assets/coke.png"
    }
  ]
}
