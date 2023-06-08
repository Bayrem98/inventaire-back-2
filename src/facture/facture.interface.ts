import Article from 'src/article/article.interface';

export default interface Facture {
  reference: string;
  societe: string;
  date: Date;
  categorie: string;
  fournisseur: string;
  quantite: number;
  prix: number;
  etat: string;
  articles: [
    {
      _id: string;
      sub_article: Array<Article>;
    },
  ];
}
