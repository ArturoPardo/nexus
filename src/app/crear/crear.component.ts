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
  newColor= '';
  handleKeyup(ev) {
    if (ev.keyCode === 13 && this.newTareaText.trim() !== '') {
      this.nuevaTarea.emit(this.newTareaText.trim());
      this.newTareaText = '';
    }
  }
  constructor() { }
}
