import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/Tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {
  listaTareas: Tarea[] = [];
  nombreTarea: string = "";

  constructor() {}

  ngOnInit(): void {
  }

  agregarTarea(): void {
    // Crear tarea
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    };
    // Agregar tarea
    this.listaTareas.push(tarea);
    // Limpiar inputText
    this.nombreTarea = "";
  }

  eliminarTarea(index: number): void {
    this.listaTareas.splice(index, 1);    
  }

  actualizarEstadoTarea(tarea: Tarea, index: number): void {
    this.listaTareas[index].estado = !tarea.estado;
  }
}