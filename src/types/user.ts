type User = {
  id: number; // Primary Key
  username: string;
  points: number;
  profile_image: string | null; // Nullable
  created_time: Date;
  bio: string;
  country: string;
  ageGroup: string;
  gender: string;
};

export default User;