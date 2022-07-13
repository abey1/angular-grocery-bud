import {
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css'],
})
export class AlertComponent implements OnInit {
  readonly ITEM_ADDED_SUCCESSFULLY_MESSAGE: string = 'item successfully added';
  readonly ITEM_REMOVED_SUCCESSFULLY_MESSAGE: string =
    'item successfully removed';
  readonly ITEM_EDITED_SUCCESSFULLY_MESSAGE: string =
    'item successfully edited';
  readonly ALL_ITEMS_DELETED_SUCCESSFULLY_MESSAGE =
    'All items successfully deleted';
  @ViewChild('alert', { static: true }) Alert: ElementRef | undefined;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  showAlert() {
    this.renderer['removeClass'](this.Alert?.nativeElement, 'hide');
    this.renderer['addClass'](this.Alert?.nativeElement, 'show');
    setTimeout(() => {
      this.renderer['removeClass'](this.Alert?.nativeElement, 'show');
      this.renderer['addClass'](this.Alert?.nativeElement, 'hide');
    }, 2000);
  }

  showItemDeletedMessage() {
    this.showAlert();
    this.renderer.setProperty(
      this.Alert?.nativeElement,
      'innerText',
      this.ITEM_REMOVED_SUCCESSFULLY_MESSAGE
    );
    this.renderer['addClass'](this.Alert?.nativeElement, 'show');
    this.renderer['removeClass'](this.Alert?.nativeElement, 'green');
    this.renderer['addClass'](this.Alert?.nativeElement, 'red');
  }
  showItemAddedMessage() {
    this.showAlert();
    this.renderer.setProperty(
      this.Alert?.nativeElement,
      'innerText',
      this.ITEM_ADDED_SUCCESSFULLY_MESSAGE
    );
    this.renderer['removeClass'](this.Alert?.nativeElement, 'red');
    this.renderer['addClass'](this.Alert?.nativeElement, 'green');
  }
  showItemEditedMessage() {
    this.showAlert();
    this.renderer.setProperty(
      this.Alert?.nativeElement,
      'innerText',
      this.ITEM_EDITED_SUCCESSFULLY_MESSAGE
    );
    this.renderer['removeClass'](this.Alert?.nativeElement, 'red');
    this.renderer['addClass'](this.Alert?.nativeElement, 'green');
  }
  showAllItemsDeletedMessage() {
    this.showAlert();
    this.renderer.setProperty(
      this.Alert?.nativeElement,
      'innerText',
      this.ALL_ITEMS_DELETED_SUCCESSFULLY_MESSAGE
    );
    this.renderer['addClass'](this.Alert?.nativeElement, 'show');
    this.renderer['removeClass'](this.Alert?.nativeElement, 'green');
    this.renderer['addClass'](this.Alert?.nativeElement, 'red');
  }
}
