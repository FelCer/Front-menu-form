import { Component, OnInit } from '@angular/core';
import { ServiceService }from './servicio/service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Front-menu-form';
  private destino:any="X";
  private formulario:boolean=false;
  public nombrecompleto:any="";
  public email:any="";
  public celular:any="";
  public edad:any="";
  constructor(private servicioListado:ServiceService){

  }
  miarreglo:any[];
  ngOnInit(){
    this.servicioListado.getListado().subscribe(
        data => {
          this.miarreglo=data;
          console.log(data)
        },
        erro=>console.log(erro)
        );
  }
  seleccion(name){
    this.destino=name;
    this.formulario=true;
  }
  registrar(){
    this.servicioListado.postFormulario(this.nombrecompleto,this.email,this.celular,this.edad).subscribe(
      data => {
        console.log("enviados..");
      },
      erro=>console.log(erro)
      );
  }
}
