import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item, AppComponent } from './../app.component';

@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css'],
})
export class SingleItemComponent implements OnInit {
  @Output() editItem = new EventEmitter<Item>();
  @Output() deletedItem = new EventEmitter<Item>();
  @Input() item = {
    id: 0,
    name: '',
  };

  constructor() {}

  ngOnInit(): void {}

  edit() {
    this.editItem.emit(this.item);
  }

  deleteItem() {
    this.deletedItem.emit(this.item);
  }
}
