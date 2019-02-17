import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {
@Input() nameUser;
  constructor() { }

  ngOnInit() {
  }

}
