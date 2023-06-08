import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Facture, FactureDocument } from './schemas/facture.schema';
import { Model } from 'mongoose';
import { CreatedFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';

@Injectable()
export class FactureService {
  constructor(
    @InjectModel(Facture.name) private factureModel: Model<FactureDocument>,
  ) {}

  async create(createFactureDto: CreatedFactureDto): Promise<Facture> {
    const createdFacture = new this.factureModel({
      ...createFactureDto,
    });
    return createdFacture.save();
  }

  async update(
    id: string,
    updateFactureDto: UpdateFactureDto,
  ): Promise</*UpdateResult*/ any> {
    return this.factureModel.updateOne({ _id: id }, updateFactureDto);
  }

  async updateSub(
    id: string,
    sub_art: string,
    updateFactureDto: UpdateFactureDto,
  ): Promise<any> {
    return this.factureModel.findOneAndUpdate(
      { articles: id, 'sub_article._id': sub_art },
      {
        $set: {
          'sub_article.$': updateFactureDto,
        },
      },
    );
  }

  async findAll(): Promise<Facture[]> {
    return this.factureModel.find().exec();
  }

  async findOne(id: string): Promise<Facture> {
    return this.factureModel.findOne({ _id: id }).exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.factureModel.deleteOne({ _id: id });
  }
}
