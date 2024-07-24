import { Elysia } from "elysia"
import { cors } from "@elysiajs/cors"
import { swagger } from "@elysiajs/swagger"

const app = new Elysia()
  .use(
    cors({
      origin: "*",
    })
  )
  .use(swagger())
  .onError(({ code, error, set }) => {
    switch (code) {
      default:
        console.log(error)
        set.status = 500
        return "INTERNAL_SERVER_ERROR"
    }
  })
  .listen(3000)

console.log(
  `Equivalent API is running at ${app.server?.hostname}:${app.server?.port}`
)
