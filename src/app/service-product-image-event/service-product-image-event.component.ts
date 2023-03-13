import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ProductServiceService } from '../product-service.service';


@Component({
  selector: '[app-service-product-image-event]',
  templateUrl: './service-product-image-event.component.html',
  styleUrls: ['./service-product-image-event.component.css']
})
export class ServiceProductImageEventComponent {
  public products:any
  constructor(pservice: ProductServiceService,private router:Router){
    this.products=pservice.getProductsWithImages()
  }
  viewDetail(f:any)
  {
    this.router.navigate(['service-product-image-event',f.ProductId])
  }
}
