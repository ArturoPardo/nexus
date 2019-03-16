import { Component,  Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
  
  
 @Output() borrarTarea = new EventEmitter();
 @Output() checkedTarea = new EventEmitter();
 @Output() mostrarControles = new EventEmitter();
 @Output() ocultarControles = new EventEmitter();
 @Input() Data;
 nombreLista:string='';
 editing:boolean=false;
  borrar(tarea) {
    this.borrarTarea.emit(tarea);
    console.log('borrarTarea');
  }
 over(tarea){  
  this.mostrarControles.emit(tarea);
    console.log('borrarTarea');
 


}
  
edit(nada) {
 
  console.log(nada);
  setTimeout(() => {
    nada.focus();
  }, 0);
  this.editing = true;
  
}
cancelEdit() {
  this.editing = false;
}
  
  out(tarea){  
    
    this.ocultarControles.emit(tarea);
    console.log('borrarTarea');}
  siExiste(tarea) {
    this.checkedTarea.emit(tarea);
  }
   
  
 


}
