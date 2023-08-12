type Ballot = {
  id: number ; // Primary Key
  title: string;
  description: string;
  options: { [name: string]: { votes: number; description: string } }; // JSON Object
  due_date: Date | null; // Nullable
  citystateId: number | null; // Nullable, Foreign Key (Citystates)
};

export default Ballot;