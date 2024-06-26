import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding the database");

    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      {
        id: 1,
        title: "Spanish",
        imageSrc: "/es.svg",
      },
      {
        id: 2,
        title: "German",
        imageSrc: "/de.svg",
      },
      {
        id: 3,
        title: "English",
        imageSrc: "/gb.svg",
      },
      {
        id: 4,
        title: "Italian",
        imageSrc: "/it.svg",
      },
      {
        id: 5,
        title: "French",
        imageSrc: "/fr.svg",
      },
      {
        id: 6,
        title: "Dutch",
        imageSrc: "/nl.svg",
      },
    ]);

    console.log("Seeding is finished");
  } catch (error) {
    console.error(error);
    throw new Error("Failed to seed the database");
  }
};

main();
