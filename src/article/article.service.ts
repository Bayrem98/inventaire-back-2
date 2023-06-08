import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Article, ArticleDocument } from './schemas/article.schema';
import { Model } from 'mongoose';
import { CreatedArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  async search(designation: string) {
    return this.articleModel.find({ designation }).exec();
  }
  constructor(
    @InjectModel(Article.name) private articleModel: Model<ArticleDocument>,
  ) {}

  async create(createArticleDto: CreatedArticleDto): Promise<Article> {
    const createdArticle = new this.articleModel({
      ...createArticleDto,
    });
    return createdArticle.save();
  }

  async update(
    id: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise</*UpdateResult*/ any> {
    return this.articleModel.updateOne({ _id: id }, updateArticleDto);
  }

  async updateSub(
    id: string,
    sub_art: string,
    updateArticleDto: UpdateArticleDto,
  ): Promise<any> {
    return this.articleModel.findOneAndUpdate(
      { articles: id, 'sub_article._id': sub_art },
      {
        $set: {
          'sub_article.$': updateArticleDto,
        },
      },
    );
  }

  async findOne(id: string): Promise<Article> {
    return this.articleModel.findOne({ _id: id }).exec();
  }

  async findAll(): Promise<Article[]> {
    return this.articleModel.find().exec();
  }

  async delete(id: string): Promise</*DeleteResult*/ any> {
    return this.articleModel.deleteOne({ _id: id });
  }

  async searchArticles(search: string): Promise<ArticleDocument[]> {
    console.log(search);
    const articles = await this.articleModel.find({
      designation: { $regex: `.*${search}.*`, $options: 'i' },
    });
    console.log(articles);
    return articles;
  }
}
