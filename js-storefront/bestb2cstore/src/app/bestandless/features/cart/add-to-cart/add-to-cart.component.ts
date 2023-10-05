/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Optional,
} from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddToCartComponent } from '@spartacus/cart/base/components/add-to-cart';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import {
  AuthService,
  CmsAddToCartComponent,
  EventService,
} from '@spartacus/core';
import {
  CmsComponentData,
  CurrentProductService,
  ProductListItemContext,
} from '@spartacus/storefront';
import { BottomSheetComponent } from 'src/app/bestandless/dailogs/bottom-sheet/bottom-sheet.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cx-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestAndLessAddToCartComponent extends AddToCartComponent {
  user: boolean = false;
  constructor(
    protected override currentProductService: CurrentProductService,
    protected override cd: ChangeDetectorRef,
    protected override activeCartService: ActiveCartFacade,
    protected override component: CmsComponentData<CmsAddToCartComponent>,
    protected override eventService: EventService,
    private _bottomSheet: MatBottomSheet,
    private auth: AuthService,
    @Optional()
    protected override productListItemContext?: ProductListItemContext
  ) {
    super(
      currentProductService,
      cd,
      activeCartService,
      component,
      eventService,
      productListItemContext
    );
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent, {
      data: { loggedIn: this.user },
      panelClass: 'component-bottom-sheet',
      closeOnNavigation: true,
    });
  
  }

  override ngOnInit(): void {
    super.ngOnInit();
    this.auth.isUserLoggedIn().pipe(
      map((isUserLoggedIn) => {
        if (isUserLoggedIn) {
          this.user = true;
        } else {
          this.user = false;
        }
      })
    ).subscribe();
  }
}
