import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  recibirBody() {
    return this.appService.obtenerPost();
  }

  @Post('/param/:id')
  recibirParametro(@Param('id') id: string) {
    return this.appService.recibirParametros(id);
  }
  @Post('/crearuser')
  recibirbody(@Body() cuerpo: {}) {
    return this.appService.recibirbody(cuerpo)
  }
  @Post('/suma')
  sumar(@Body() cuerpo: {}) {
    return this.appService.sumar(cuerpo);
  }
  @Post('/restar')
  restar(@Body() cuerpo: {}) {
    return this.appService.restar(cuerpo);
  }
  @Post('/multiplicar')
  multiplicar(@Body() cuerpo: {}) {
    return this.appService.multiplicar(cuerpo);
  }
  @Post('/division')
  division(@Body() cuerpo: {}) {
    return this.appService.division(cuerpo);
  }
  @Post('/peso')
  peso(@Body() cuerpo:{}){
    return this.appService.peso(cuerpo);

  }
  @Post('/sexo')
  sexo(@Body() genero:{}){
    return this.appService.sexo(genero);

  }
  
}