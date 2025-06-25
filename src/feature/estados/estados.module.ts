import { Module } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { EstadosController } from './estados.controller';

@Module({
  controllers: [EstadosController],
  providers: [EstadosService],
})
export class EstadosModule {}
