import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})

export class DosComponent implements OnInit {
  
  @Output() nuevoColor = new EventEmitter();
  newColor = '';

  mandarColor(ev) {
    
    if (ev.keyCode === 13 && this.newColor.trim() !== '') {
      console.log('el nuevo nombre  es:', this.newColor);
      this.nuevoColor.emit(this.newColor.trim());
      
      this.newColor = '';
    }
  }
  constructor() { }

  ngOnInit() {
  }

}




  
  


