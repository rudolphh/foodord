import { AbstractControl } from '@angular/forms';


export class ConfirmPasswordValidator {

  static MatchPassword(control: AbstractControl) {

    let password: AbstractControl = control.get('password')?.value;
    let confirmPassword: AbstractControl = control.get('confirm_password')?.value;

    if(password != confirmPassword){
      control.get('confirm_password')?.setErrors({ ConfirmPassword: true });
    }
    else {
      return null as any;
    }
  }
}
