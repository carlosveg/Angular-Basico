import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad: number = 0;
  origen: string = "USD";
  destino: string = "EUR";
  total: number = 0;
  monedas: string[] = ["USD", "EUR", "LIBRA"];

  constructor() { }

  ngOnInit(): void {
  }

  convertir(): void {
    switch(this.origen) {
      case "USD":
        if (this.destino === "USD") this.total = this.cantidad;
        if (this.destino === "EUR") this.total = this.cantidad * 0.82;
        if (this.destino === "LIBRA") this.total = this.cantidad * 0.72;
        break;
      case "EUR":
        if (this.destino === "USD") this.total = this.cantidad * 1.21;
        if (this.destino === "EUR") this.total = this.cantidad;
        if (this.destino === "LIBRA") this.total = this.cantidad * 0.88;
        break;
      case "LIBRA":
        if (this.destino === "USD") this.total = this.cantidad * 1.38;
        if (this.destino === "EUR") this.total = this.cantidad * 1.14;
        if (this.destino === "LIBRA") this.total = this.cantidad;
        break;
    }
  }

}