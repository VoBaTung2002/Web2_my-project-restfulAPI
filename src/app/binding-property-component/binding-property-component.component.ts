import { Component } from '@angular/core';

@Component({
  selector: '[app-binding-property-component]',
  templateUrl: './binding-property-component.component.html',
  styleUrls: ['./binding-property-component.component.css']
})
export class BindingPropertyComponentComponent {
  public name:string="Trần Duy Thanh"
  public email:string="thanhtd@uel.edu.vn"
  public nameid:string="hee"
  public emailid:string="emailid"
  public isDisabled:boolean=true
}
