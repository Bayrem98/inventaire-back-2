import { Module } from '@nestjs/common';
import { FactureController } from './facture.controller';
import { FactureService } from './facture.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FactureSchema } from './schemas/facture.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Facture', schema: FactureSchema }]),
  ],
  providers: [FactureService],
  controllers: [FactureController],
})
export class FactureModule {}
