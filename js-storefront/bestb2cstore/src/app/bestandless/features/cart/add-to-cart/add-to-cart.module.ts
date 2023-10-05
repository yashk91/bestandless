/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CmsConfig, Config, ConfigModule, I18nModule, provideDefaultConfig } from '@spartacus/core';
import {
  IconModule,
  ItemCounterModule,
  OutletModule,
} from '@spartacus/storefront';
import { BestAndLessAddToCartComponent } from './add-to-cart.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    I18nModule,
    IconModule,
    ItemCounterModule,
    OutletModule,
    MatBottomSheetModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        ProductAddToCartComponent: {
          component: BestAndLessAddToCartComponent,
          data: {
            inventoryDisplay: false,
          },
        },
      },
    })
  ],
  providers: [],
  declarations: [BestAndLessAddToCartComponent],
  exports: [BestAndLessAddToCartComponent],
})
export class BestAndLessAddToCartModule {}
