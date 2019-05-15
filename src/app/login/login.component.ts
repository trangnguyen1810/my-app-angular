import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginFormGroup: FormGroup;
  isSubmit = false;
  constructor(
    private _formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.SetValidator();
  }
  private SetValidator() {
    this.LoginFormGroup = this._formBuilder.group({
        txtUserAccount: ['', Validators.required],
        txtPassword: ['', Validators.required],
    });
  }

  public IsInvalidField(name: string) {
    return this.LoginFormGroup.get(name).invalid &&
        (this.LoginFormGroup.get(name).dirty || this.LoginFormGroup.get(name).touched
            || this.isSubmit);
}

  public onLogin() {
    this.isSubmit = true;
    const params = {
      userAccount: this.LoginFormGroup.get('txtUserAccount').value,
      password: this.LoginFormGroup.get('txtPassword').value,
    };
    if (params.userAccount !== '' && params.password !== '') {
      window.alert('Information Email: ' + params.userAccount + ', Password: ' + params.password );
      this.isSubmit = false;
    }
    console.log('>>>> param', params);
  }
}
