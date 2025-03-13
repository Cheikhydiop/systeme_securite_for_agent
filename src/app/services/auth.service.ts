import { Injectable } from '@angular/core';
import { Observable, pipe, tap } from 'rxjs';
import { ApiService } from './api.service';
import { ApiResponse } from '../models/api-response.interface';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError} from 'rxjs/operators';
import { throwError } from 'rxjs';


interface LoginCredentials {
  login: string;
  password: string;
}

interface UserData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiService {
  constructor(private router: Router, protected override http: HttpClient) {
    super(http);
  }

  testConnection(): Observable<ApiResponse<any>> {
    return this.get<any>('/test');
  }

  login(credentials: LoginCredentials): Observable<ApiResponse<any>> {
    if (!credentials.login || !credentials.password) {
      console.error('Les champs login ou mot de passe sont vides');
      return throwError(() => new Error('Les champs login ou mot de passe sont vides'));
    }
    
    console.log('URL de base:', this.baseUrl);
    console.log('Envoi des credentials:', credentials);
  
    return this.post<any>('/v1/login', credentials) 
      .pipe(
        tap(response => console.log('Réponse du serveur:', response)),
        catchError(error => {
          console.error('Erreur de connexion:', error);
          return throwError(() => error);
        })
      );
  }
  
  
  register(userData: UserData): Observable<ApiResponse<any>> {
    return this.post<any>('/register', userData);
  }
}
