import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../models/Pedidos';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  pedidos: Pedidos[] = null;
  constructor() { }

  ngOnInit() { //Aqui inicializamos datos
    this.pedidos = [
      new Pedidos(1, 'regalos', 100),
      new Pedidos(2, 'fruta', 150),
      new Pedidos(3, 'complementos',  250),
      new Pedidos(4, 'juegos',  240),
    ]

}

}
