import { ResponseCreate, ResponseUsers, RequestCreate, ResponseUser, RequestUpdate, ResponseUpdate } from './user.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users?page=2";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.url);
  }

  createUser(request: RequestCreate): Observable<ResponseCreate>{
    return this.http.post<ResponseCreate>(this.url, request)
  }

  getUser(id: string | null): Observable<ResponseUser>{
    const _url = `${this.url}/${id}`;

    return this.http.get<ResponseUser>(this.url);
  }

  updateUser(id: string | null, request: RequestUpdate): Observable<ResponseUpdate>{
    const _url =`${this.url}/${id}`;

    return this.http.put<ResponseUpdate>(this.url, request);
  }
}
