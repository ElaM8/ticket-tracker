type Employee = {
  id: number;
  name: string;
  role: string;
  profile: {
      experience: string,
      department: string,
      techstack: any[],
      profilePicture: string,
    },
}

export default Employee