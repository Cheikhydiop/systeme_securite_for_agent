import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class MediaService extends ApiService {
  private readonly BASE_PATH = '/api/media';

  constructor(protected override http: HttpClient) {
    super(http);
  }

  getAllMedia(): Observable<any> {
    return this.get(this.BASE_PATH);
  }

  createMedia(mediaData: any): Observable<any> {
    return this.post(this.BASE_PATH, mediaData);
  }
}
