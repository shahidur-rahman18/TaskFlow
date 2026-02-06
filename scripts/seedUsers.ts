import "dotenv/config";

import * as bcrypt from "bcrypt";
import clientPromise from "../src/lib/mongodb";

async function seedUsers() {
  console.log("Connecting to MongoDB...");
  const client = await clientPromise;
  console.log("Connected!");
  const db = client.db('NextEvent');
  console.log("Using DB:", db.databaseName);

  const saltRounds = 10;
  // hello git 

  const {
    ADMIN_USERNAME,
    ADMIN_EMAIL,
    ADMIN_PASSWORD,
    USER_USERNAME,
    USER_EMAIL,
    USER_PASSWORD,
  } = process.env;

  if (
    !ADMIN_USERNAME ||
    !ADMIN_EMAIL ||
    !ADMIN_PASSWORD ||
    !USER_USERNAME ||
    !USER_EMAIL ||
    !USER_PASSWORD
  ) {
    throw new Error("Missing required environment variables");
  }

  const hashedAdminPassword = await bcrypt.hash(ADMIN_PASSWORD, saltRounds);
  const hashedUserPassword = await bcrypt.hash(USER_PASSWORD, saltRounds);

  await db.collection("users").insertMany([
    {
      username: ADMIN_USERNAME,
      email: ADMIN_EMAIL,
      role: "ADMIN",
      password: hashedAdminPassword,
      createdAt: new Date(),
    },
    {
      username: USER_USERNAME,
      email: USER_EMAIL,
      role: "USER",
      password: hashedUserPassword,
      createdAt: new Date(),
    },
  ]);

  console.log("Admin and User seeded successfully");
}

seedUsers()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Seeding failed:", error);
    process.exit(1);
  });