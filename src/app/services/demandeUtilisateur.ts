import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class DemandeUtilisateurService extends ApiService {
  private readonly BASE_PATH = '/demande';

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAllDemandesUtilisateur(): Observable<any> {
    return this.get(this.BASE_PATH);
  }

  createDemandeUtilisateur(demandeData: any): Observable<any> {
    return this.post(this.BASE_PATH, demandeData);
  }
}
