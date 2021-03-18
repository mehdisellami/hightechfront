import { categorieArticle } from "./Categorie.model";

export class Articles {
    id: string;
    libelle: string;
    marque: string;
    prix: number;
    photo: string;
    categorieArticle: categorieArticle = {
        id:""
    }
}