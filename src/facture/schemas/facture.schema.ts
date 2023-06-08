import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Article } from 'src/article/schemas/article.schema';

export type FactureDocument = Facture & Document;

@Schema()
export class Facture {
  @Prop({ required: true, type: String })
  reference: string;
  @Prop({ required: true, type: String })
  societe: string;
  @Prop({ required: true, type: Date })
  date: Date;
  @Prop({ required: true, type: String })
  categorie: string;
  @Prop({ required: true, type: String })
  fournisseur: string;
  @Prop({ required: true, type: Number })
  quantite: number;
  @Prop({ required: true, type: Number })
  prix: number;
  @Prop({ required: true, type: String })
  etat: string;
  @Prop({ required: true })
  articles: [
    {
      _id: string;
      sub_article: Array<Article>;
    },
  ];
}

export const FactureSchema = SchemaFactory.createForClass(Facture);
