import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ApiResponse } from '../models/api-response.interface';
import { Wallet } from '../models/wallet.model';
import { TransferRequest, TransferResponse } from '../models/transfer.model';
import { Balance } from '../models/balance.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; // Assurez-vous que cette ligne est présente
import {  WalletResponse } from '../models/api-response.interface';




@Injectable({
  providedIn: 'root'
})
export class WalletService extends ApiService {
  private readonly BASE_PATH = '/api/wallet';
  private readonly TRANSACTIONS_PATH = '/transaction';

  getUserWallet(userId: string): Observable<ApiResponse<WalletResponse>> {
    const token = localStorage.getItem('token');
  
    if (!token) {
      console.error('Aucun jeton trouvé dans localStorage');
      return throwError(() => new Error('Le jeton d\'authentification est manquant.'));
    }
  
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  
    // Construire l'URL avec l'userId
    return this.http.get<ApiResponse<WalletResponse>>(`${this.BASE_PATH}/user/${userId}`, { headers })
      .pipe(
        catchError((error) => {
          console.error("Erreur lors de la récupération des détails du portefeuille :", error);
          return throwError(() => new Error('Erreur lors de la récupération des détails du portefeuille.'));
        })
      );
  }
  
  
  getBalance(): Observable<ApiResponse<Balance>> {
    return this.get<Balance>(`${this.BASE_PATH}/balance`);
  }

  transfer(transferData: TransferRequest): Observable<ApiResponse<TransferResponse>> {
    return this.post<TransferResponse>(
      `${this.TRANSACTIONS_PATH}/transfer`,
      transferData
    );
  }

  // Méthodes additionnelles que vous pourriez ajouter
  getTransactionHistory(walletId: string): Observable<ApiResponse<TransferResponse[]>> {
    return this.get<TransferResponse[]>(`${this.TRANSACTIONS_PATH}/history/${walletId}`);
  }

  // getWalletDetails(walletId: string): Observable<ApiResponse<Wallet>> {
  //   return this.get<Wallet>(`${this.BASE_PATH}/${walletId}`);
  // }
  getWalletDetails(walletId: string): Observable<ApiResponse<Wallet>> {
    const token = localStorage.getItem('token'); // Retrieve the token from localStorage

    if (!token) {
        console.error('No token found in localStorage');
        return throwError(() => new Error('Authentication token is missing.'));
    }

    const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
    });

    return this.get<Wallet>(`${this.BASE_PATH}/${walletId}`, { headers });
}


  

  getCurrentBalance(): Observable<Wallet> {
    // Implémentez votre logique ici
    return this.http.get<Wallet>('/api/wallet/balance');  // exemple
  }
}


