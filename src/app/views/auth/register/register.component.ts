import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { GeneralService } from 'app/services/general.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../shared.scss']
})
export class RegisterComponent implements OnInit {
  authForm: FormGroup = null;
  constructor(public gService: GeneralService, public aService: AuthService) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }
  register() {
    if (this.authForm.invalid) {
      this.gService.error('Error with registration details!');
    } else {
      const user = {
        username: this.authForm.get('username').value,
        password: this.authForm.get('password').value
      };
      this.aService.register(user).then(o => {
        console.log(o)
        this.gService.successThenNav('Successfully registered!', 'login');
      }).catch(err => this.gService.error("Could not register user!"));
    }
  }
}
