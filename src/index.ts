import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { inArray } from 'drizzle-orm';
import {usersTable} from './db/schema';

const db = drizzle(process.env.DATABASE_URL!);


// Seed the database with some initial data
async function seedDatabase() {
    const users = [
        { name: 'Alice', username: 'alice123', email: 'alice@example.com' },
        { name: 'Bob', username: 'bob123', email: 'bob@example.com' },
        { name: 'Charlie', username: 'charlie123', email: 'charlie@example.com' }
    ];
    await db.insert(usersTable).values(users);
    console.log('Database seeded with initial users.');
}

seedDatabase();

// Get all users from the database
async function getAllUsers() {
  const users = await db.select().from(usersTable);
  console.log('All Users:', users);
}

getAllUsers();

// Remove added users
async function removeAddedUsers() {
  const usernamesToRemove = ['alice123', 'bob123', 'charlie123'];
  await db.delete(usersTable).where(inArray(usersTable.username, usernamesToRemove));
  console.log('Added users removed from the database.');
}

removeAddedUsers();