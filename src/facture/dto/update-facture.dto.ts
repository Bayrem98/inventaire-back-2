import {
  IsDate,
  IsOptional,
  IsNumber,
  IsString,
  IsArray,
} from 'class-validator';
import { Article } from 'src/article/schemas/article.schema';

export class UpdateFactureDto {
  @IsOptional()
  @IsString()
  reference?: string;
  @IsOptional()
  @IsString()
  societe?: string;
  @IsOptional()
  @IsDate()
  date?: Date;
  @IsOptional()
  @IsString()
  categorie?: string;
  @IsOptional()
  @IsString()
  fournisseur?: string;
  @IsOptional()
  @IsNumber()
  quantite?: number;
  @IsOptional()
  @IsNumber()
  prix?: number;
  @IsOptional()
  @IsString()
  etat?: string;
  @IsOptional()
  @IsArray()
  articles: [
    {
      _id: string;
      sub_article: Array<Article>;
    },
  ];
}
