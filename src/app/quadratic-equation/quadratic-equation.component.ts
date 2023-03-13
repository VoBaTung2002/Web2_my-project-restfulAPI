import { Component } from '@angular/core';

@Component({
  selector: '[app-quadratic-equation]',
  templateUrl: './quadratic-equation.component.html',
  styleUrls: ['./quadratic-equation.component.css']
})

export class QuadraticEquationComponent {
  quadratic = new Quadratic
  result:string | null = null
  giaiPhuongTrinh(): void{
    this.result = this.quadratic.findSolution()
  }
  xoaTrang(){
    this.quadratic.a = 0;
    this.quadratic.b = 0;
    this.quadratic.c = 0;
    this.result = null;
  }
}

class Quadratic {
  a:number = 0
  b:number = 0
  c:number = 0

  findSolution(){
    const delta = this.b * this.b - 4 * this.a * this.c;
    if (delta < 0) {
      return "Phương trình vô nghiệm";
    } else if (delta === 0) {
      return `x = ${-this.b / (2 * this.a)}`;
    } else {
      const x1 = (-this.b + Math.sqrt(delta)) / (2 * this.a);
      const x2 = (-this.b - Math.sqrt(delta)) / (2 * this.a);
      return `x1 = ${x1}, x2 = ${x2}`;
    }
  }
}
