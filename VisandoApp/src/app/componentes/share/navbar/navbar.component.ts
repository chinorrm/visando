import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public isLoged: boolean;
  public usuario: string;
  public emailUser: string;
  public userPhoto: string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUserAuth().subscribe(auth => {
      if (auth) {
        this.isLoged = true;
        this.usuario = auth.displayName;
        this.emailUser = auth.email;
        this.userPhoto = auth.photoURL;
      } else {
        this.isLoged = false;
      }

    });
  }

  logout() {
    this.authService.logout();
  }

}
