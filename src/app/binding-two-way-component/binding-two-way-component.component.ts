import { Component } from '@angular/core';

@Component({
  selector: '[app-binding-two-way-component]',
  templateUrl: './binding-two-way-component.component.html',
  styleUrls: ['./binding-two-way-component.component.css']
})
export class BindingTwoWayComponentComponent {
  public name:string='Vo Ba Tung'
  public address:string='Ktx khu B'
  public email: string = 'tungvb20406'
  public phone: string = '0334568445'
  setDefaultAddress(){
    this.address='13 đường Hùng Vương'
  }
}
