import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  FormControl,
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { AuthService } from '@spartacus/core';
import { CustomFormValidators } from '@spartacus/storefront';
import { LoginFormComponentService } from '@spartacus/user/account/components';
import { Observable, of } from 'rxjs';
import { CustomLoginFormComponentService } from '../../services/custom-login-form.component';

@Component({
  selector: 'cx-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  providers: [CustomLoginFormComponentService],
})
export class BottomSheetComponent {
  showInvalidMobile = false;

  form: UntypedFormGroup = this.service.form;
  isUpdating$: Observable<boolean> = this.service.isUpdating$;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>,
    private service: CustomLoginFormComponentService,
    private router: Router,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { loggedIn: boolean }
  ) {}

  onSubmit(): void {
    this.service.login();
    this._bottomSheetRef.dismiss();
  }

  navigate(route: string) {
    this._bottomSheetRef.dismiss();
    this.router.navigate([route]);
  }

  notficationForm: UntypedFormGroup = new UntypedFormGroup({
    mobileNumber: new UntypedFormControl(),
    emailNotification: new UntypedFormControl(true),
  });

  onNotificationSubscription() {
    const value = this.notficationForm.get('mobileNumber')?.value;
    if (value && !isNaN(value) && String(value).length === 10) {
      alert(
        'Mobile Number :' +
          value +
          ' Email Selected : ' +
          this.notficationForm.get('emailNotification')?.value
      );
    } else {
      this.showInvalidMobile = true;
    }
  }
}
