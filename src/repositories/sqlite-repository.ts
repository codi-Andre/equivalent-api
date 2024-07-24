import { db, type SqliteDb } from "drizzle/db"

class Repository {
  constructor(private readonly repo: SqliteDb) {}
}

export const repository = new Repository(db)
