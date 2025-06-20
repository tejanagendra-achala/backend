import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.email || !this.password) {
      alert('Please enter both email and password');
      return;
    }
    this.authService.login({ username: this.email.trim(), password: this.password }).subscribe({
      next: (res) => {
        // Accept any response with a message or text containing 'Login successful'
        const msg = res?.message || res?.text || '';
        if (msg && msg.toLowerCase().includes('login successful')) {
          this.router.navigate(['/']);
          return;
        }
        alert('Login failed: ' + (msg || 'Unexpected response'));
      },
      error: (err) => {
        const msg = err?.error?.message || err?.error?.text || (typeof err.error === 'string' ? err.error : JSON.stringify(err.error)) || 'Unknown error';
        alert('Login failed: ' + msg);
      }
    });
  }
}
