import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  username = '';
  email = '';
  password = '';
  passwordcon = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(form: any) {
    if (form.valid) {
      if (this.password !== this.passwordcon) {
        alert('Passwords do not match');
        return;
      }
      this.authService.signup({ username: this.username, email: this.email, password: this.password }).subscribe({
        next: () => {
          // Redirect to login or home on success
          this.router.navigate(['/login']);
        },
        error: (err) => {
          // Show backend error message if available
          const msg = err?.error ? (typeof err.error === 'string' ? err.error : JSON.stringify(err.error)) : 'Unknown error';
          alert('Signup failed: ' + msg);
        },
      });
    }
  }
}
