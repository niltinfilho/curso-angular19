import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthgoogleService } from '../authgoogle.service';
import { Profile } from './profile.model';

@Component({
  selector: 'app-landingpage',
  standalone: false,
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.scss'
})
export class LandingpageComponent {
  profile: Profile | undefined;

  constructor(
    private router: Router,
    private loginService: AuthgoogleService
  ) { }

  navegar() {
    this.router.navigate(['/paginas/galeria']);
  }

  logarComGoogle() {
    this.loginService.login();
  }

  isLoggedIn(): boolean {
    const dadosGoogle = this.loginService.getLoggedProfile();
    console.log(dadosGoogle);
    this.profile = dadosGoogle;
    return !!this.profile;
  }
}
