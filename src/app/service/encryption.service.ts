import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EncryptedObject } from '../models/EncryptedObject';
import { DecryptedObject } from '../models/DecryptedObject';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
  baseUrl = 'http://localhost:8000/api';

  constructor(private httpClient: HttpClient) { }

  encryptValue(decryptedObject: DecryptedObject): Observable<any>{
    return this.httpClient.post(this.baseUrl + '/encrypt', decryptedObject).pipe();
  }

  decryptValue(encryptedObject: EncryptedObject): Observable<any>{
    return this.httpClient.post(this.baseUrl + '/decrypt', encryptedObject).pipe();
  }
}
