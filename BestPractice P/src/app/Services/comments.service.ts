import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  constructor(private http: HttpClient) {}
  addComment(comment: any) {
    return this.http.post('http://localhost:8080/addc', comment);
  }
}
