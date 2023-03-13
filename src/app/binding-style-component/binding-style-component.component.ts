import { Component } from '@angular/core';

@Component({
  selector: '[app-binding-style-component]',
  templateUrl: './binding-style-component.component.html',
  styleUrls: ['./binding-style-component.component.css']
})
export class BindingStyleComponentComponent {
  public isError: boolean = false;
  public textStyle = {
    color: 'darkorange',
    fontSize: '26px'
  }
  public textUpper = {
    color: 'green',
    fontSize: '18px',
  }
}
