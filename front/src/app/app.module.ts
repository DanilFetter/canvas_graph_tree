import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';




import { AppComponent } from './app.component';
import { CommitFormComponent } from './commit-form/commit-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartAreaComponent } from './chart-area/chart-area.component';

@NgModule({
  declarations: [
    AppComponent,
    CommitFormComponent,
    ChartAreaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
