import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EstadosModule } from './feature/estados/estados.module';

@Module({
  imports: [EstadosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
