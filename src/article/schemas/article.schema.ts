import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ArticleDocument = Article & Document;

@Schema()
export class Article {
  @Prop({ type: String })
  _id?: string;
  @Prop({ required: true, type: String })
  designation: string;
  @Prop({ required: true, type: String })
  marque: string;
  @Prop({ type: String })
  numserie?: string;
  @Prop({ type: String })
  observation?: string;
  @Prop({ type: String })
  code?: string;
  @Prop({ type: String })
  affectation?: string;
  @Prop({ required: true, type: Number })
  prixut: number;
  @Prop({ required: true, type: Number })
  qc: number;
  @Prop({ type: Number })
  qi?: number;
  @Prop({ type: Number })
  ecart?: number;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
