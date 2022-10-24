import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() all: number = 0;
  @Input() table: number = 0;
  @Input() bed: number = 0;
  @Input() sofa: number = 0;
  @Input() chair: number = 0;
  @Input() desk: number = 0;
  @Input() chairdesk: number = 0;

  selectedbtn: string = 'all';
  @Output()
  radiobtnchange: EventEmitter<string> = new EventEmitter<string>();
  onradiobtnchange() {
    this.radiobtnchange.emit(this.selectedbtn);
  }
}
