import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule, MatLabel} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";


@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatLabel,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [AuthComponent],
})
export class AuthModule {
}
