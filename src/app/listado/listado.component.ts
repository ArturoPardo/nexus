import { Component,  Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
   
 @Output() borrarTarea = new EventEmitter();
 @Output() checkedTarea = new EventEmitter();
 @Input() Data;
  borrar(tarea) {
    this.borrarTarea.emit(tarea);
  }
  siExiste(tarea) {
    this.checkedTarea.emit(tarea);
  }
}
