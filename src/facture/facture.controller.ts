import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { FactureService } from './facture.service';

import Facture from './facture.interface';
import { UpdateFactureDto } from './dto/update-facture.dto';
import { CreatedFactureDto } from './dto/create-facture.dto';

@Controller('facture')
export class FactureController {
  constructor(private readonly factureService: FactureService) {}
  @Get()
  findAll() {
    return this.factureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.factureService.findOne(id);
  }

  @Post()
  create(@Body() createFactureDto: CreatedFactureDto): Promise<Facture> {
    return this.factureService.create(createFactureDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateFactureDto: UpdateFactureDto,
  ): Promise<Facture> {
    return this.factureService.update(id, updateFactureDto);
  }

  @Patch(':id/:sub_art')
  async updateSub(
    @Param('id') id: string,
    @Param('sub_art') sub_art: string,
    @Body() updateFactureDto: UpdateFactureDto,
  ): Promise<Facture> {
    return this.factureService.updateSub(id, sub_art, updateFactureDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.factureService.delete(id);
  }
}
