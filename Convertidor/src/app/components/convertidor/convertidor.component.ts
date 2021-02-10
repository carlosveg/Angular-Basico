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
  constructor() { }

  ngOnInit(): void {
  }

}