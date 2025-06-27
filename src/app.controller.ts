import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const saludo = 'Hola, mundo!';
    console.log(saludo);
    // Aquí puedes realizar cualquier otra lógica que necesites
    // Por ejemplo, llamar a un servicio o manipular datos
    // En este caso, simplemente retornamos el saludo
    // a través del servicio AppService
    //this.appService.logMessage(saludo);
    return this.appService.getHello();
  }
}
