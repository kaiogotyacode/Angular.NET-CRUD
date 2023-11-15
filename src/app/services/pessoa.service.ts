import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/Pessoa/Pessoa';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiURL = `${environment.ApiURL}/Pessoa`;

  constructor(private http : HttpClient) {}

  GetPessoas(): Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.apiURL);
  }

  AddPessoa(pessoa? : Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.apiURL,pessoa);
  }

  DeletePessoa(idPessoa : Number): Observable<number>{
    return this.http.delete<number>(`${this.apiURL}/${idPessoa}`);
  }

}
