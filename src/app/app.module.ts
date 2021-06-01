import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { ServiceService } from './Service/service.service';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from "@angular/common";
import { CreateComponent } from './components/create/create.component';
import { SearchComponent } from './components/search/search.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    SearchComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
