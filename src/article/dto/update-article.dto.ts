import { IsMongoId, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateArticleDto {
  @IsMongoId()
  @IsOptional()
  _id?: string;
  @IsOptional()
  @IsString()
  designation?: string;
  @IsOptional()
  @IsString()
  marque?: string;
  @IsOptional()
  @IsString()
  numserie?: string;
  @IsOptional()
  @IsString()
  observation?: string;
  @IsOptional()
  @IsString()
  code?: string;
  @IsOptional()
  @IsString()
  affectation?: string;
  @IsOptional()
  @IsNumber()
  prixut?: number;
  @IsOptional()
  @IsNumber()
  qc?: number;
  @IsOptional()
  @IsNumber()
  qi?: number;
  @IsOptional()
  @IsNumber()
  ecart?: number;
}
