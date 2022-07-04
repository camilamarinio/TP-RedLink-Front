import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';


import { DataTablesModule } from "angular-datatables";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    DataTablesModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule

  ],
  exports:[
    ReactiveFormsModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    DataTablesModule,
    MatPaginatorModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule
  ]
})
export class ElementosCompratidosModule { }
