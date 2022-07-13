import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { AlertComponent } from './alert/alert.component';
import { ItemAddFormComponent } from './item-add-form/item-add-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { SingleItemComponent } from './single-item/single-item.component';
import { ClearAllItemsComponent } from './clear-all-items/clear-all-items.component';

@NgModule({
  declarations: [AppComponent, AlertComponent, ItemAddFormComponent, SingleItemComponent, ClearAllItemsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
