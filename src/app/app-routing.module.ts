import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { GroupCustomerComponent } from './group-customer/group-customer.component';
import { GroupCustomer2Component } from './group-customer2/group-customer2.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { BooksComponent } from './books/books.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookUpdateComponent } from './book-update/book-update.component';

const routes: Routes = [
  {path:"customer",component:CustomerComponent},
  {path:"list-customer",component:ListCustomerComponent},
  {path:"group-customer",component:GroupCustomerComponent},
  {path:"group-customer2",component:GroupCustomer2Component},
  {path:'service-product-image-event',component:ServiceProductImageEventComponent},
  {path:'service-product-image-event/:id',component:ServiceProductImageEventDetailComponent},
  {path:'books',component:BooksComponent},
  {path:'books/book-new', component:BookNewComponent},
  {path:'books/book-new/:id', component:BookDetailComponent},
  {path:'books/book-update/:id', component:BookUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[
  CustomerComponent,
  ListCustomerComponent,
  GroupCustomerComponent,
  GroupCustomer2Component,
  ServiceProductImageEventComponent,
  ServiceProductImageEventDetailComponent,
  BooksComponent,
  BookNewComponent,
  BookDetailComponent,
  BookUpdateComponent
]
