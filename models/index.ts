export interface ICategory {
  id?: number;
  name?: string;
}

export interface IPost {
  id?: number;
  article?: string;
  title?: string;
  summary?: string;
  thumbnailUrl?: string;
  author?: string;
  date?: string;
  imageUrl?: string;
  category?: ICategory,
}
