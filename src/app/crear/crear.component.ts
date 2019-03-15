import { Component, Output, EventEmitter} from '@angular/core';
// --------------output,emiter
@Component({
  selector: 'crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent  {

  @Output() nuevaTarea = new EventEmitter();
  newTareaText = '';
  handleKeyup(ev) {
    console.log('keyup event fired!');
    if (ev.keyCode === 13 && this.newTareaText.trim() !== '') {
      console.log('La tarea para añadir es:', this.newTareaText);
      this.nuevaTarea.emit(this.newTareaText.trim());
      this.newTareaText = '';
    }
  }
  constructor() { }
}
