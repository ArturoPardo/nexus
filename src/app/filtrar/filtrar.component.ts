import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.css']
})
export class FiltrarComponent  {
  @Output() nuevaQuery = new EventEmitter();
  @Output() reset = new EventEmitter();
  queryText: string = '';
  buscar() {
    this.nuevaQuery.emit(this.queryText); 
  }
  borrar() {
    this.reset.emit();
    this.queryText = '';
  }
}
