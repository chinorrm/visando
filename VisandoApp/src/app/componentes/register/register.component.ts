import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  addUser() {
    this.auth.register(this.email, this.password)
    .then((result) => {
        console.log(result);
        this.router.navigate(['/main']);
    }).catch((err) => {
      console.log(err);
    });
  }

}
