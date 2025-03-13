import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MainLayoutComponent } from '../../components/main-layout/main-layout.component';



@Component({
  selector: 'app-login',
  standalone: true,

  imports: [FormsModule, CommonModule, MatSnackBarModule, MatProgressSpinnerModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Assure-toi que ce fichier existe
})
export class LoginComponent {
  login: string = ''; 
  password: string = '';
  errorMessage: string = ''; 
  showQRCode: boolean = false;
  userId: string = '';
  isLoading: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  onLogin(event: Event) {
    event.preventDefault(); 
    this.isLoading = true;
    this.errorMessage = '';
    
    console.log('Données récupérées:', { login: this.login, password: this.password });
  
    const credentials = { login: this.login, password: this.password };
  
    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Réponse du backend:', response);
        if (response.token) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/dashboard']);
        } else {
          this.errorMessage = 'Erreur: Tokennnnnnnnnnnn manquant';
        }
        this.isLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        console.error('Erreur API:', error);
        this.isLoading = false;
        this.errorMessage = error.error?.message || 'Une erreur est survenue';
      }
    });
  }
  

  showSnackbar(message: string) {
    this.snackBar.open(message, 'Fermer', {
      duration: 3000,
      panelClass: ['error-snackbar']
    });
  }

  onCloseQR() {
    this.showQRCode = false;
    this.router.navigate(['/dashboard']).catch(err => console.error('Erreur navigation après QR:', err));
  }

  onRegister() {
    this.router.navigate(['/register']).catch(err => console.error('Erreur navigation vers register:', err));
  }
}
