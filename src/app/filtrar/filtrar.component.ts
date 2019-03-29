import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent  {
  @Output() nuevaQuery = new EventEmitter();
  @Output() reset = new EventEmitter();
  @Output() resetLocal = new EventEmitter();
  queryText: string = '';
  buscar() {
    this.nuevaQuery.emit(this.queryText); 
  }
  borrar() {
    console.log("llega aqui");
    this.reset.emit();
    this.queryText = '';
  }
  borrarLocal(){
    console.log(1);
    this.resetLocal.emit();
    
  }
}
