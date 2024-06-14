export type Comment = {
  id: number;
  text: string;
  username: string;
  date: string;
}

export type Post = {
  id: number;
  title: string;
  body: string;
  author: string;
  date: string;
  comment: Comment[]
}
