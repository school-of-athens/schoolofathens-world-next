type Post = {
  id: number; // Primary Key
  created_time: Date;
  userId: number;
  title: string | null;
  body: string; // JSON or plain text
  type: "Discussion" | "Article" | "Opinion";
  ballotId: number | null; // Nullable, Foreign Key (Ballots)
  upvotes: number;
  downvotes: number;
  citystateId: number | null; // Nullable, Foreign Key (Citystates)
};

export default Post;