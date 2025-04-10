const { Client } = require("pg");
require('dotenv').config()

const SQL = `
CREATE TABLE IF NOT EXISTS message_info (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  text VARCHAR(700),
  added VARCHAR(500)
);

INSERT INTO message_info (username, text, added) 
VALUES
  ('vi', 'hellloo cupcakee', '14 February 2025, 2:00am'),
  ('mongoose', 'i am leader of haus kiramman call me momma', '14 February 2025, 2:01am');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:5432/${process.env.DB_NAME}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
