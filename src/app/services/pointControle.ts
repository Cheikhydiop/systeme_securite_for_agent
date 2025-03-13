import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class PointControleService extends ApiService {
  private readonly BASE_PATH = '/api/pointcontrole';

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAllPointsControle(): Observable<any> {
    return this.get(this.BASE_PATH);
  }

  createPointControle(pointControleData: any): Observable<any> {
    return this.post(this.BASE_PATH, pointControleData);
  }
}
