import { Elysia } from "elysia"
import { cors } from "@elysiajs/cors"
import { swagger } from "@elysiajs/swagger"
import { getCategories } from "./routes/get-categories"
import { getFoods } from "./routes/get-foods"
import { getFoodDetails } from "./routes/get-food-details"

const app = new Elysia()
  .use(
    cors({
      origin: "*",
    })
  )
  .use(
    swagger({
      documentation: {
        info: {
          title: "Equivalent documentation",
          version: "0.0.1",
        },
        tags: [{ name: "Categories" }, { name: "Foods" }],
      },
    })
  )
  .onError(({ code, error, set }) => {
    switch (code) {
      case "VALIDATION":
        return error.message
      case "NOT_FOUND":
        return error.message
      default:
        console.log(error)
        set.status = 500
        return "INTERNAL_SERVER_ERROR"
    }
  })
  .group("/api/v1", (app) =>
    app.use(getCategories).use(getFoods).use(getFoodDetails)
  )
  .listen(3000)

console.log(
  `Equivalent API is running at ${app.server?.hostname}:${app.server?.port}`
)
