import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from 'src/app/utils/global-variables';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(objParam) {
    return this.http.get<any>(URL_API + `/bank/${objParam.bank}/users/${objParam.userId}/investments`);
  }

  loginUser(userName) {
    return this.http.get<any>(URL_API + `/users/${userName}`)
  }
}
