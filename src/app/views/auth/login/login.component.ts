import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';
import { GeneralService } from 'app/services/general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.scss', '../../shared.scss']
})
export class LoginComponent {
  authForm: FormGroup = null;
  constructor(public gService: GeneralService, public aService: AuthService) {}
  ngOnInit(): void {
    this.authForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }
  login() {
    if (this.authForm.invalid) {
      this.gService.error('Error with login details!');
    } else {
      const user = {
        username: this.authForm.get('username').value,
        password: this.authForm.get('password').value
      };
      this.aService.login(user).then(o => {
        localStorage.setItem('loggedIn', 'true');
        this.gService.successThenNav('Successfully logged in!', 'dash/albums');
      }).catch(err => this.gService.error("Could not login!"));
    }
  }
}
