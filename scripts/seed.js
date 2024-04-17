const { db } = require('@vercel/postgres');
const {
  actions,
  users,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        admin BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        return client.sql`
        INSERT INTO users (id, first_name, last_name, email, password, admin)
        VALUES (${user.id}, ${user.first_name}, ${user.last_name}, ${user.email}, ${hashedPassword}, ${user.admin})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedActions(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "actions" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS actions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    submitter_id UUID NOT NULL,
    name VARCHAR(500) NOT NULL,
    date DATE, 
    time VARCHAR(5),
    description VARCHAR(500),
    link VARCHAR(50)
  );
`;

    console.log(`Created "actions" table`);

    // Insert data into the "actions" table
    const insertedActions = await Promise.all(
      actions.map(
        (action) => client.sql`
        INSERT INTO actions (id, submitter_id, name, date, time, description, link)
        VALUES (${action.id}, ${action.submitter_id}, ${action.name}, ${action.date}, ${action.time}, ${action.description}, ${action.link})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedActions.length} actions`);

    return {
      createTable,
      actions: insertedActions,
    };
  } catch (error) {
    console.error('Error seeding actions:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedActions(client);
  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
