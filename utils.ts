// utils.ts
type User = {
  email: string;
  password: string;
};

// Simulated "backend" in memory
let users: User[] = [
  { email: 'test@example.com', password: 'secure123' },
  { email: 'admin@demo.com', password: 'adminpass' },
];

export const getUserByEmailAndPassword = (email: string, password: string) => {
  return users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase() && user.password === password
  );
};

export const registerUser = (email: string, password: string): { success: boolean; message: string } => {
  const exists = users.find((user) => user.email.toLowerCase() === email.toLowerCase());

  if (exists) {
    return { success: false, message: 'User already exists' };
  }

  users.push({ email, password });
  return { success: true, message: 'User registered' };
};

export const userExists = (email: string) => {
  return users.some((user) => user.email.toLowerCase() === email.toLowerCase());
};
