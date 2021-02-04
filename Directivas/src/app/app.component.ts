import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  listStudents = [
    {nombre: "Carlos", estado: "Regular"},
    {nombre: "Clara", estado: "Nelson"},
    {nombre: "Antonio", estado: "Regular"},
    {nombre: "Nidia", estado: "Nelson"},
    {nombre: "Nicolas", estado: "Libre"},
  ];
  mostrar = true;

  toogle(): void {
    this.mostrar = !this.mostrar;
  }
}
