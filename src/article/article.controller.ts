import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  Query,
  Patch,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreatedArticleDto } from './dto/create-article.dto';
import Article from './article.interface';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleDocument } from './schemas/article.schema';

@Controller('article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}
  @Get()
  findAll(@Query('designation') designation: string) {
    if (!designation) return this.articleService.findAll();
    return this.articleService.search(designation);
  }

  @Get('search/:id')
  search(@Param('id') search: string): Promise<ArticleDocument[]> {
    return this.articleService.searchArticles(search);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(id);
  }

  @Post()
  create(@Body() createArticleDto: CreatedArticleDto): Promise<Article> {
    return this.articleService.create(createArticleDto);
  }

  /* @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.update(id, updateArticleDto);
  } */

  @Patch(':id/:sub_art')
  async updateSub(
    @Param('id') id: string,
    @Param('sub_art') sub_art: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    return this.articleService.updateSub(id, sub_art, updateArticleDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.articleService.delete(id);
  }
}
