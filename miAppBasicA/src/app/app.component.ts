import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent { //Export significa que la clase es pública
  title:string = 'Angular';
  nombre:string = 'Jose';
  edad:number =28;

  getName():string{
    return this.nombre+" "+this.title+" "+this.edad;
  }
}
