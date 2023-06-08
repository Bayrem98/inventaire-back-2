import { IsArray, IsDate, IsNumber, IsString } from 'class-validator';
import { Article } from 'src/article/schemas/article.schema';

export class CreatedFactureDto {
  @IsString()
  reference: string;
  @IsString()
  societe: string;
  @IsDate()
  date: Date;
  @IsString()
  categorie: string;
  @IsString()
  fournisseur: string;
  @IsNumber()
  quantite: number;
  @IsNumber()
  prix: number;
  @IsString()
  etat: string;
  @IsArray()
  articles: [
    {
      _id: string;
      sub_article: Array<Article>;
    },
  ];
}
