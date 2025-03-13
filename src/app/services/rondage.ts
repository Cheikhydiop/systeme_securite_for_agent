import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class RondageService extends ApiService {
  private readonly BASE_PATH = '/api/vigile/rondage';

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAllRondages(): Observable<any> {
    return this.get(this.BASE_PATH);
  }

  createRondage(rondageData: any): Observable<any> {
    return this.post(this.BASE_PATH, rondageData);
  }
}
