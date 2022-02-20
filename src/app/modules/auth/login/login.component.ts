import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      userName: ['',Validators.required]
    });
  }

  onSubmit(): void {
    
  }


}
