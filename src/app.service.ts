import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  obtenerPost(){
    return "llego el post"
  }
  recibirParametros(id:string){
    return id;
  }
  recibirbody(cuerpo:{}){
    return cuerpo;
  }
  sumar(cuerpo){
    return cuerpo.numero + cuerpo.otronumero 
  }
  restar(cuerpo){
    return cuerpo.numero - cuerpo.otronumero 
  }
  multiplicar(cuerpo){
    return cuerpo.numero * cuerpo.otronumero 
  }
  division(cuerpo){
    return cuerpo.numero / cuerpo.otronumero 
  }
  peso(cuerpo){
    
    let p= cuerpo.pesoKg/( cuerpo.alturaMtr * cuerpo.alturaMtr);
    if(p<0){
      return 'Ingrese los datos correctamente'
    }
    if (p<18.5){
      return 'Bajo de peso';
    } else if( p>= 18 &&  p < 25){
      return 'Peso Normal';
    }else if(p>=25) {
      return 'Sobre Peso'
    }
    if(cuerpo.pesoKg <=0 || cuerpo.alturaMtr<=0){
      return 'ingrese Datos Correctos'

    }
  }
  sexo(genero){
    
    if (genero.op === 'M') {
      return 'masculino';
    } else if (genero.op === 'F') {
      return 'femenino';
    } else {
      return 'Opción inválida. Debe ser "masculino" o "femenino".';
    }

  }
}