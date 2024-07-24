import { defineConfig } from "drizzle-kit"

export default defineConfig({
  out: "./drizzle",
  schema: "./drizzle/schema/*",
  dialect: "sqlite",
  dbCredentials: {
    url: "./drizzle/taco.db",
  },
  verbose: true,
})
