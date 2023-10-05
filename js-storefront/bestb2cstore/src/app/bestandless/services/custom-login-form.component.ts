import { Injectable } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import {
  AuthService,
  GlobalMessageService,
  GlobalMessageType,
  WindowRef,
} from '@spartacus/core';
import { LoginFormComponentService } from '@spartacus/user/account/components';
import { BottomSheetComponent } from '../dailogs/bottom-sheet/bottom-sheet.component';

@Injectable({
  providedIn: 'root',
})
export class CustomLoginFormComponentService extends LoginFormComponentService {
  constructor(
    protected override auth: AuthService,
    protected override globalMessage: GlobalMessageService,
    protected override winRef: WindowRef,
    private _bottomSheet: MatBottomSheet
  ) {
    super(auth, globalMessage, winRef);
  }

  protected override onSuccess(isLoggedIn: boolean): void {
    if (isLoggedIn) {
      // We want to remove error messages on successful login (primary the bad
      // username/password combination)
      this.globalMessage.remove(GlobalMessageType.MSG_TYPE_ERROR);
      this.form.reset();
      this._bottomSheet.open(BottomSheetComponent, {
        data: { loggedIn: isLoggedIn },
        panelClass: 'component-bottom-sheet',
        closeOnNavigation: true,
      });
    }

    this.busy$.next(false);
  }
}
