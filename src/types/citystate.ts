type Citystate = {
  id: number; // Primary Key
  name: string;
  description: string;
  rules: string;
  profile_image: string;
  background_image: string;
  type: "School" | "Company" | "Organization";
  view_access: string; // Enum
  vote_access: string; // Enum
  password: string; // Join code
  roles: { [name: string]: { permissions: object } }; // JSON Object of Roles
};

export default Citystate;
