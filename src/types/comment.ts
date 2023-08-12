// Comments Table
type CustomComment = {
  id: number; // Primary Key
  postId: number; // Foreign Key (Posts)
  userId: number; // Foreign Key (Users)
  body: string;
  created_time: Date;
  parentCommentId: number | null; // Nullable, Foreign Key (Comments, self-referencing)
};

export default CustomComment;