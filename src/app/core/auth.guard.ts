import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isUserLoggedIn = !!localStorage.getItem('user'); // Replace with actual auth check
    if (!isUserLoggedIn) {
      alert('You need to log in to access checkout!');
      this.router.navigate(['/products']);
    }
    return isUserLoggedIn;
  }
}
