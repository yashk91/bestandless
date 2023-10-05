import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BottomSheetComponent } from './bottom-sheet.component';
import {  I18nModule, UrlModule } from '@spartacus/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {
  FormErrorsModule,
  SpinnerModule,
  PasswordVisibilityToggleModule,
} from '@spartacus/storefront';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    UrlModule,
    I18nModule,
    FormErrorsModule,
    SpinnerModule,
    PasswordVisibilityToggleModule,
    MatSlideToggleModule,
    MatFormFieldModule
  ],
  providers: [
  ],
  declarations: [BottomSheetComponent],
  exports: [BottomSheetComponent],
})
export class BottomSheetModule {}
