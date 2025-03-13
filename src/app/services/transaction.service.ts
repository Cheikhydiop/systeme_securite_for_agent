// import { Injectable } from '@angular/core';
// import { ApiService } from './api.service';
// import { Transaction } from '../models/transaction.model';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { ApiResponse } from '../models/api-response.interface'; // Assurez-vous que ce modèle existe

// @Injectable({
//   providedIn: 'root'
// })
// export class Services extends ApiService {
//   private readonly BASE_PATH = '/api/wallet';
//   private readonly TRANSACTIONS_PATH = '/api/transaction';
  
//   constructor(protected override http: HttpClient) {
//     super(http);
//   }

//   getRecentTransactions(limit: number = 10): Observable<ApiResponse<Transaction[]>> {
//     return this.get<Transaction[]>(`${this.TRANSACTIONS_PATH}/recent?limit=${limit}`);
//   }

//   getTransactionDetails(id: string): Observable<ApiResponse<Transaction>> {
//     return this.get<Transaction>(`${this.TRANSACTIONS_PATH}/${id}`);
//   }

//   getAllTransactionsByUser(userId: string, limit: number = 10): Observable<ApiResponse<Transaction[]>> {
//     return this.get<Transaction[]>(`${this.TRANSACTIONS_PATH}/user/${userId}/all?limit=${limit}`);
//   }

//   getAllTransactionsByWallet(userId: string, limit: number = 10): Observable<ApiResponse<Transaction[]>> {
//     const token = localStorage.getItem('token'); // Récupérer le token depuis le localStorage
  
//     if (!token) {
//       console.error('Aucun token trouvé dans le localStorage');
//       return throwError(() => new Error('Le token d\'authentification est manquant.'));
//     }
  
//     const headers = new HttpHeaders({
//       'Authorization': `Bearer ${token}`
//     });
  
//     return this.http.get<ApiResponse<Transaction[]>>(`${this.TRANSACTIONS_PATH}/user/${userId}/all?limit=${limit}`, { headers });
//   }
// }
