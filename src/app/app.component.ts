import { Component, OnInit } from '@angular/core';
import { ServiceService } from './servicio/service.service';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Front-menu-form';
  private destino: any = "X";
  private formulario: boolean = false;
  private divFade: boolean = false;
  private divError: boolean = false;
  public nombrecompleto: any = "";
  public email: any = "";
  public celular: any = "";
  public edad: any = "";
  public error: any = '';
  constructor(private servicioListado: ServiceService) {

  }
  miarreglo: any[];
  ngOnInit() {
    this.servicioListado.getListado().subscribe(
      data => {
        this.miarreglo = data;
        console.log(data)
      },
      erro => console.log(erro)
    );

  }
  ocultarFade() {
    $("#fade").fadeOut();
    var resetForm: HTMLFormElement;
    resetForm = <HTMLFormElement>document.getElementById('formUser');
    if (resetForm)
      resetForm.reset();
    this.divFade = false;
  }
  mostrarFade() {
    $("#fade").fadeIn();
    this.divFade = true;
    var global = this;
    setTimeout(function () {
      global.ocultarFade();
    }, 5000);
  }


  seleccion(name) {
    this.destino = name;
    this.formulario = true;
  }
  registrar() {
    let nombre = $("#nombre").val();
    let email = $("#email").val();
    let celular = $("#celular").val();
    let edad = $("#edad").val();

      if (this.validarEmail(email)) {
        if (this.validarCelular(celular)) {
          if (this.validarEdad(edad)) {
            this.servicioListado.postFormulario(nombre, email, celular, edad).subscribe(
              success => {
                console.log("enviados..");
                this.mostrarFade();
              },
              erro => console.log(erro)
            );
          }
          
        }
      } 
     
  }
  ocultarError() {
    $("#error").fadeOut();
    this.divFade = false;
  }
  mostrarError() {
    $("#error").fadeIn();
    this.divError = true;
    var global = this;
    setTimeout(function () {
      global.ocultarError();
    }, 2000);
  }

  validarEmail(mail) {
    const regExp = new RegExp(/^[a-zA-Z0-9_.]+[^-.'"!#$%&/()=?¿¡*~}ÇüéâåçêëïîÄÅ♫æÆôûÿÖø£Ø×ƒ|{Ññªº®¬½¼▓«▒»░┤©╣║╗╝¥┬├─┼¤█▄¦↨▀ßµ±‗¾¶§¸°¨☺¹³²■☻]+\@+[a-z]+\.[a-z.]{1,3}(\.[a-z]{1,3})?(\.[a-z]{1,3})?$/);
    if (regExp.test(mail)) {
      return true;
    }
    else {
      if (mail == '') {
        this.error = 'Correo vacio';
        this.mostrarError();
        return false;
      } else {
        this.error = 'Formato del Correo mal';
        this.mostrarError();
        return false;
      }
    }
  }
  validarCelular(cel) {
    const regExp = new RegExp(/^[0-9]{10}$/);
    if (regExp.test(cel)) {
      return true;
    } else {
      if (cel == '') {
        this.error = "El numero de celular vacio";
        this.mostrarError();
        return false;
      } else {
        this.error = "El numero de celular debe contener 10 digitos.";
        this.mostrarError();
        return false;
      }


    }
  }
  validarEdad(edad) {
    if (edad >= 18 && edad <= 100) {
      return true;
    }
    else {
      if (edad == '') {
        this.error = "La edad esta vacia";
        this.mostrarError();
        return false;
      } else {
        this.error = "La edad debe estar en el rango de 18 a 100 años";
        this.mostrarError();
        return false;
      }
    }
  }
}

