import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class ServiceGardennage extends ApiService {
  private readonly BASE_PATH = '/api/gardennage';

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAllServices(): Observable<any> {
    return this.get(this.BASE_PATH);
  }

  createService(serviceData: any): Observable<any> {
    return this.post(this.BASE_PATH, serviceData);
  }
}
