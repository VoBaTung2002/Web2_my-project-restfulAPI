import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, RoutingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { GroupCustomerComponent } from './group-customer/group-customer.component';
import { GroupCustomer2Component } from './group-customer2/group-customer2.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BindingPropertyComponentComponent } from './binding-property-component/binding-property-component.component';
import { BindingClassComponentComponent } from './binding-class-component/binding-class-component.component';
import { BindingStyleComponentComponent } from './binding-style-component/binding-style-component.component';
import { BindingEventComponentComponent } from './binding-event-component/binding-event-component.component';
import { FormsModule } from '@angular/forms';
import { BindingTwoWayComponentComponent } from './binding-two-way-component/binding-two-way-component.component';
import { QuadraticEquationComponent } from './quadratic-equation/quadratic-equation.component';
import { LunarYearComponent } from './lunar-year/lunar-year.component';
import { Bai11Component } from './bai11/bai11.component';
import { Bai12Component } from './bai12/bai12.component';
import { ServiceProductImageEventComponent } from './service-product-image-event/service-product-image-event.component';
import { ServiceProductImageEventDetailComponent } from './service-product-image-event-detail/service-product-image-event-detail.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookNewComponent } from './book-new/book-new.component';
import { BookUpdateComponent } from './book-update/book-update.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ListCustomerComponent,
    RoutingComponent,
    GroupCustomerComponent,
    GroupCustomer2Component,
    MyComponentComponent,
    BindingPropertyComponentComponent,
    BindingClassComponentComponent,
    BindingStyleComponentComponent,
    BindingEventComponentComponent,
    BindingTwoWayComponentComponent,
    QuadraticEquationComponent,
    LunarYearComponent,
    Bai11Component,
    Bai12Component,
    ServiceProductImageEventComponent,
    ServiceProductImageEventDetailComponent,
    BooksComponent,
    BookDetailComponent,
    BookNewComponent,
    BookUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
