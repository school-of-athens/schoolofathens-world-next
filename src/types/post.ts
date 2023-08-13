type Post = {
  id: number; // Primary Key
  created_time: Date;
  userId: number;
  title?: string;
  body: string; // JSON or plain text
  images?: string[]; // Array of image URLs
  type: "Discussion" | "Article" | "Opinion";
  ballotId?: number; // Nullable, Foreign Key (Ballots)
  upvotes: number;
  downvotes: number;
  citystateId?: number; // Nullable, Foreign Key (Citystates)
};

export default Post;