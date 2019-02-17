import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
 @Output() borrarTarea = new EventEmitter();
 @Output() checkedTarea = new EventEmitter();
  // for(let i=0;i<this.alumnos.length;i++){
  //   if(alumno==this.alumnos[i]){
  //     this.alumnos.splice(i,1);
  //   }

  borrar(tarea) {

    this.borrarTarea.emit(tarea);
    console.log('borrarTarea');
  }

  siExiste(tarea) {
    this.checkedTarea.emit(tarea);
   

    // for(let i=0;i<this.arrData.length;i++){
    //   if(tarea==this.arrData[i]){
    //   tarea.completada=!tarea.completada;
    //    console.log(tarea.completada);
    
    //   }
    }
   





  @Input() arrData;
 
  // -------solo el input arrdata

 
  constructor() {}
 
    


  ngOnInit() {
  }

}
