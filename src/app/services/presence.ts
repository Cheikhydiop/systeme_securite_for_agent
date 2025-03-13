import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class PresenceService extends ApiService {
  private readonly BASE_PATH = '/api/presence';

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAllPresences(): Observable<any> {
    return this.get(this.BASE_PATH);
  }

  createPresence(presenceData: any): Observable<any> {
    return this.post(this.BASE_PATH, presenceData);
  }
}
