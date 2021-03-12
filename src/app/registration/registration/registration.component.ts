import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ConfirmPasswordValidator } from 'src/app/_helpers/confirmpassword.validator';
import { User } from '../../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registerForm !: FormGroup;
  public user : User = {};
  public attemptedSubmit : boolean = false;

  constructor(private fb : FormBuilder, private userService : UserService) { }

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      name: [this.user.name, Validators.required],
      email: [this.user.email, [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]],
      password: [this.user.password, [
        Validators.required,
        Validators.minLength(6)
      ]],
      password_confirmation: [this.user.password_confirmation, Validators.required],
    }, { validator : ConfirmPasswordValidator.MatchPassword });

  }

  onSubmit(){
    if (this.registerForm.valid) {
      this.userService.register(this.user).subscribe(res => console.log(res['data']));
    } else {
      // validate all form fields
      this.attemptedSubmit = true;
      this.validateAllFormFields(this.registerForm);
    }
  }

  isRequiredFieldValid(field: string) {
    return this.attemptedSubmit && this.registerForm.get(field)!.touched && this.registerForm.get(field)!.errors?.required;
  }

  isPatternFieldValid(field: string) {
    return this.attemptedSubmit && this.registerForm.get(field)!.touched && this.registerForm.get(field)!.errors?.pattern;
  }

  isMinLengthFieldValid(field: string) {
    return this.attemptedSubmit && this.registerForm.get(field)!.touched && this.registerForm.get(field)!.errors?.minlength;
  }

  isPasswordMatching(){
    return this.attemptedSubmit && this.confirm_password!.touched && this.confirm_password!.errors?.ConfirmPassword;
  }

  displayFieldCss(field: string) {
    return {
      'is-invalid': this.attemptedSubmit && this.registerForm.get(field)!.invalid && this.registerForm.get(field)!.touched
    };
  }

  validateAllFormFields(formGroup: FormGroup) {         //{1}
    Object.keys(formGroup.controls).forEach(field => {  //{2}
      const control = formGroup.get(field);             //{3}
      if (control instanceof FormControl) {             //{4}
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {        //{5}
        this.validateAllFormFields(control);            //{6}
      }
    });
  }

  get name() { return this.registerForm.get('name'); }
  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get confirm_password() { return this.registerForm.get('password_confirmation'); }

}