import { Pessoa } from "./Pessoa/Pessoa";

export interface ResponsePessoa<T>{
    pessoas : T,
    take : number,
    page : number,
    total? : number
}