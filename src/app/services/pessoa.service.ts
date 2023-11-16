import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pessoa } from '../models/Pessoa/Pessoa';
import { environment } from 'src/environments/environment.development';
import { ResponsePessoa } from '../models/ResponsePessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private apiURL = `${environment.ApiURL}/Pessoa`;

  constructor(private http : HttpClient) {}

  GetPessoaByID(idPessoa? : number) : Observable<Pessoa>{
    return this.http.get<Pessoa>(`${this.apiURL}/${idPessoa}`);
  }

  GetPessoas(page : number, take : number): Observable<ResponsePessoa<Pessoa[]>>{
    return this.http.get<ResponsePessoa<Pessoa[]>>(`${this.apiURL}?page=${page}&take=${take}`);
  }

  AddPessoa(pessoa? : Pessoa): Observable<Pessoa>{
    return this.http.post<Pessoa>(this.apiURL,pessoa);
  }

  DeletePessoa(idPessoa : Number): Observable<number>{
    return this.http.delete<number>(`${this.apiURL}/${idPessoa}`);
  }

  EditPessoa(pessoa? : Pessoa): Observable<Pessoa>{
    return this.http.put<Pessoa>(this.apiURL, pessoa);
  }

}
