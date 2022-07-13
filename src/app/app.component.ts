import { FormControl } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ItemAddFormComponent } from './item-add-form/item-add-form.component';

export interface Item {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  newItem = '';
  items: Item[] = [];
  editItem: Item = {
    id: 0,
    name: '',
  };
  @ViewChild(AlertComponent, { static: true }) alert:
    | AlertComponent
    | undefined;
  @ViewChild(ItemAddFormComponent, { static: true })
  itemAddForm: ItemAddFormComponent | undefined;

  title = 'angular-grocery-bud';

  ngOnInit(): void {
    this.assignItemsFromLocalStorage();
    throw new Error('Method not implemented.');
  }
  showItemRemovedMessage() {
    this.alert?.showItemDeletedMessage();
  }
  showItemAddedMessage() {
    this.alert?.showItemAddedMessage();
  }
  showItemEditedMessage() {
    this.alert?.showItemEditedMessage();
  }
  showAllItemsDeletedMessage() {
    this.alert?.showAllItemsDeletedMessage();
  }
  addItem(item: FormControl) {
    this.items.push({ id: new Date().getTime(), name: item.value });
    this.showItemAddedMessage();
    this.saveInLocalStorage();
  }

  saveInLocalStorage() {
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  assignItemsFromLocalStorage() {
    let found = localStorage.getItem('items');
    this.items = found != undefined ? JSON.parse(found) : [];
  }

  itemsNotEmpty(): boolean {
    return this.items.length > 0;
  }
  edit(event: Item) {
    this.editItem = event;
    this.itemAddForm?.edit(event);
  }
  deleteItem(event: Item) {
    this.items = this.items.filter((item) => item.id !== event.id);
    this.saveInLocalStorage();
    this.showItemRemovedMessage();
  }
  submitEditedItem(event: Item) {
    this.items.forEach((item) => {
      item.id === event.id ? (item.name = event.name) : null;
    });
    this.saveInLocalStorage();
    this.showItemEditedMessage();
  }
  clearAll(_: any) {
    this.items = [];
    this.saveInLocalStorage();
    this.showAllItemsDeletedMessage();
  }
}
