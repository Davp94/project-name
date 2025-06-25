import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstadosService } from './estados.service';
import { CreateEstadoDto } from './dto/create-estado.dto';
import { UpdateEstadoDto } from './dto/update-estado.dto';

@Controller('estados')
export class EstadosController {
  constructor(private readonly s: EstadosService) {}

  @Get()
  findAll() {
    return this.s.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.s.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstadoDto: UpdateEstadoDto) {
    return this.s.update(+id, updateEstadoDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.s.remove(+id);
  }
}
