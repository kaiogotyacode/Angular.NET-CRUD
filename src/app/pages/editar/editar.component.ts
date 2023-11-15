import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pessoa } from 'src/app/models/Pessoa/Pessoa';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  @Output() onSubmit = new EventEmitter<Pessoa>();

  formAtualizaPessoa!: FormGroup;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.formAtualizaPessoa = new FormGroup({
      idPessoa: new FormControl(0),
      nome: new FormControl('Nome da Pessoa', [Validators.required]),
      email: new FormControl('Email da Pessoa', [Validators.required, Validators.email])
    });
  }

  EditPessoa() {
    //this.pessoaService.alterar(this.formAtualizaPessoa.value).subscribe();
  }


}
