import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { SelectChildComponentComponent } from './select-child-component/select-child-component.component';
import { DisplayChildComponentComponent } from './display-child-component/display-child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderListComponent,
    ParentComponentComponent,
    SelectChildComponentComponent,
    DisplayChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
