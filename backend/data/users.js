import bcrypt from 'bcryptjs';

const Users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Ankur Kumar',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Gaurav Tiwari',
    email: 'gaurav@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default Users;
