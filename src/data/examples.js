

const exampleUser = {
  id: 1,
  username: "philosopher42",
  points: 150,
  profile_image:
    "https://xhcucozjulskkfgxiulx.supabase.co/storage/v1/object/public/test/avatar",
  created_time: new Date("2022-01-01"),
  bio: "Lover of wisdom and inquiry.",
  country: "Greece",
  gender: "male",
  ageGroup: "18-24",
};

const exampleCityState = {
  id: 1,
  name: "Athens Academy",
  description: "A place for scholars and philosophers.",
  rules: "Be respectful. No spam.",
  profile_image:
    "https://xhcucozjulskkfgxiulx.supabase.co/storage/v1/object/public/test/citystate?t=2023-08-12T14%3A57%3A29.874Z",
  background_image:
    "https://xhcucozjulskkfgxiulx.supabase.co/storage/v1/object/public/test/bg",
  type: "School",
  view_access: "public",
  vote_access: "members",
  password: "join-code",
  roles: {
    member: { permissions: { canPost: true, canVote: true } },
    admin: { permissions: { canManage: true } },
  },
};

const exampleBallot = {
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

const exampleDiscussionPost = {
  id: 1,
  created_time: new Date(),
  userId: exampleUser.id,
  title: "Discussion on Ethics",
  body: "What is the nature of ethics in modern society?",
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg",
    "https://www.travelinfusedlife.com/wp-content/uploads/2019/10/things-to-know-before-visiting-acropolis-athens-1024x1536.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg",
  ],
  type: "Discussion",
  upvotes: 5,
  downvotes: 0,
  citystateId: 1,
};

const exampleArticlePost = {
  id: 2,
  created_time: new Date(),
  userId: exampleUser.id,
  title: "The Philosophy of Science",
  body: {
    type: "doc",
    content: [
      {
        type: "heading",
        attrs: {
          level: 2,
        },
        content: [
          {
            type: "text",
            text: "Hi there,",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "this is a ",
          },
          {
            type: "text",
            marks: [
              {
                type: "italic",
              },
            ],
            text: "basic",
          },
          {
            type: "text",
            text: " example of ",
          },
          {
            type: "text",
            marks: [
              {
                type: "bold",
              },
            ],
            text: "tiptap",
          },
          {
            type: "text",
            text: ". Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:",
          },
        ],
      },
      {
        type: "bulletList",
        content: [
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "That’s a bullet list with one …",
                  },
                ],
              },
            ],
          },
          {
            type: "listItem",
            content: [
              {
                type: "paragraph",
                content: [
                  {
                    type: "text",
                    text: "… or two list items.",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "Fun! Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:",
          },
        ],
      },
      {
        type: "codeBlock",
        attrs: {
          language: "css",
        },
        content: [
          {
            type: "text",
            text: "body {\n    display: none;\n  }",
          },
        ],
      },
      {
        type: "paragraph",
        content: [
          {
            type: "text",
            text: "I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.",
          },
        ],
      },
      {
        type: "blockquote",
        content: [
          {
            type: "paragraph",
            content: [
              {
                type: "text",
                text: "Wow, that’s amazing. Good work, boy! 👏 ",
              },
              {
                type: "hardBreak",
              },
              {
                type: "text",
                text: "— Mom",
              },
            ],
          },
        ],
      },
    ],
  },
  images: [
    "https://upload.wikimedia.org/wikipedia/commons/a/a7/The_Acropolis_of_Athens_viewed_from_the_Hill_of_the_Muses_%2814220794964%29.jpg",
  ],
  type: "Article",
  upvotes: 8,
  downvotes: 1,
};

const exampleOpinionPost = {
  id: 3,
  created_time: new Date(),
  userId: exampleUser.id,
  body: "I strongly support the new curriculum!",
  type: "Opinion",
  ballotId: exampleBallot.id,
  upvotes: 4,
  downvotes: 2,
  citystateId: 1,
};

const exampleComment = {
  id: 1,
  postId: exampleDiscussionPost.id,
  userId: exampleUser.id,
  body: "I think ethics plays a crucial role in shaping society.",
  created_time: new Date(),
  parentCommentId: null,
};

export {
  exampleUser,
  exampleCityState,
  exampleBallot,
  exampleDiscussionPost,
  exampleArticlePost,
  exampleOpinionPost,
  exampleComment,
};
