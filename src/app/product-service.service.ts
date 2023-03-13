import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  productsImage=[
    {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"assets/coke.png"},
    {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"assets/pepsi.png"},
    {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"assets/sting.png"},
  ]
  constructor() { }
  getProductsWithImages()
  {
    return this.productsImage
  }
  getProductDetail(id:any){
    return this.productsImage.find(x=>x.ProductId==id)
  }
}
