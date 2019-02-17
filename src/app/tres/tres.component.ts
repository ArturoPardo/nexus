import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css']
})
export class TresComponent implements OnInit {
  @Input() realDato;
  @Input() nuevoColor;
  
  constructor() { }

  ngOnInit() {
  }

}
