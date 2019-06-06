import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-component',
  templateUrl: './reusable-input.component.html',
  styleUrls: ['./reusable-input.component.css']
})
export class ReusableInputComponent implements OnInit {

  @Input() fieldId: string;
  @Input() type: string;
  @Input() columns: string;
  @Input() placeholder: string;

  constructor() { }

  ngOnInit() {
  }

}
