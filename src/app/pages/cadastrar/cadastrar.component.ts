import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/models/Pessoa/Pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  constructor(private pessoaService : PessoaService, private route : Router){}
  
  @Output() onSubmit = new EventEmitter<Pessoa>();
  
  formCadastroPessoa!: FormGroup;
  
  ngOnInit(): void {
    this.formCadastroPessoa = new FormGroup({
      idPessoa : new FormControl(0),
      nome: new FormControl('', [Validators.required]), 
      email: new FormControl('', [Validators.email, Validators.required])
    });
  }

  AddPessoa() {
      this.pessoaService.AddPessoa(this.formCadastroPessoa.value).subscribe(() =>{
          this.route.navigate(['/listar']);
      });
  }

}
