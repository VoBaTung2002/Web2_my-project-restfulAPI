import { Component } from '@angular/core';

@Component({
  selector: '[app-list-customer]',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent {
  customers=[
    {
      "Id":"Cus123",
      "Name":"Obama",
      "Email":"obama@gmail.com",
      "Age":67,
      "Image":"assets/obama-avatar.png"
    },
    {
      "Id":"Cus456",
      "Name":"Kim jong Un",
      "Email":"unun@gmail.com",
      "Age":38,
      "Image":"assets/unun-avatar.png"
    }
    ,
    {
      "Id":"Cus789",
      "Name":"Putin",
      "Email":"putin@gmail.com",
      "Age":77,
      "Image":"assets/putin-avatar.png"
    }
  ]
}
