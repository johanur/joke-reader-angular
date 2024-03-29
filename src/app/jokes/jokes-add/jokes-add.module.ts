import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesAddComponent } from './jokes-add.component';
import { JokesAddRoutingModule } from './jokes-add-routing.module';
import { MatCardModule } from '@angular/material/card';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {JokesFormModule} from '../jokes-form/jokes-form.module';

@NgModule({
  declarations: [ JokesAddComponent ],
  imports: [
    CommonModule,
    JokesAddRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    JokesFormModule
  ]
})

export class JokesAddModule { }
