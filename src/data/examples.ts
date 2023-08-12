import Ballot from "@/types/ballot";
import Citystate from "@/types/citystate";
import CustomComment from "@/types/comment";
import Post from "@/types/post";
import User from "@/types/user";

const exampleUser: User = {
  id: 1,
  username: "philosopher42",
  points: 150,
  profile_image: "https://xhcucozjulskkfgxiulx.supabase.co/storage/v1/object/public/test/avatar",
  created_time: new Date("2022-01-01"),
  bio: "Lover of wisdom and inquiry.",
  country: "Greece",
  gender: "male",
  ageGroup: "18-24",
};

const exampleCitystate: Citystate = {
  id: 1,
  name: "Athens Academy",
  description: "A place for scholars and philosophers.",
  rules: "Be respectful. No spam.",
  profile_image: "https://xhcucozjulskkfgxiulx.supabase.co/storage/v1/object/public/test/citystate?t=2023-08-12T14%3A57%3A29.874Z",
  background_image: "https://xhcucozjulskkfgxiulx.supabase.co/storage/v1/object/public/test/bg",
  type: "School",
  view_access: "public",
  vote_access: "members",
  password: "join-code",
  roles: {
    member: { permissions: { canPost: true, canVote: true } },
    admin: { permissions: { canManage: true } },
  },
};

const exampleBallot: Ballot = {
  id: 1,
  title: "Should we adopt a new curriculum?",
  description: "Vote on the proposed curriculum changes.",
  options: {
    yes: { votes: 10, description: "Adopt the new curriculum." },
    no: { votes: 5, description: "Keep the current curriculum." },
  },
  due_date: new Date("2023-09-01"),
  citystateId: 1,
};

const exampleDiscussionPost: Post = {
  id: 1,
  created_time: new Date(),
  userId: exampleUser.id,
  title: "Discussion on Ethics",
  body: "What is the nature of ethics in modern society?",
  type: "Discussion",
  ballotId: null,
  upvotes: 5,
  downvotes: 0,
  citystateId: 1,
};

const exampleArticlePost: Post = {
  id: 2,
  created_time: new Date(),
  userId: exampleUser.id,
  title: "ThCe Philosophy of Science",
  body: "<h1>Introduction</h1><p>This article explores...</p>",
  type: "Article",
  ballotId: null,
  upvotes: 8,
  downvotes: 1,
  citystateId: null,
};

const exampleOpinionPost: Post = {
  id: 3,
  created_time: new Date(),
  userId: exampleUser.id,
  title: null,
  body: "I strongly support the new curriculum!",
  type: "Opinion",
  ballotId: exampleBallot.id,
  upvotes: 4,
  downvotes: 2,
  citystateId: 1,
};

const exampleComment: CustomComment = {
  id: 1,
  postId: exampleDiscussionPost.id,
  userId: exampleUser.id,
  body: "I think ethics plays a crucial role in shaping society.",
  created_time: new Date(),
  parentCommentId: null,
};
