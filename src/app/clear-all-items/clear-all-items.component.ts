import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-clear-all-items',
  templateUrl: './clear-all-items.component.html',
  styleUrls: ['./clear-all-items.component.css'],
})
export class ClearAllItemsComponent implements OnInit {
  @Output() clearAll = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  clearAllElements() {
    this.clearAll.emit();
  }
}
