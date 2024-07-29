FROM oven/bun:1.1.21-alpine

RUN addgroup app && adduser -S -G app app

USER app

WORKDIR /app

COPY package.json bun.lockb ./

USER root

RUN chown -R app:app .

USER app

RUN bun install --production

COPY src src
COPY drizzle drizzle

COPY tsconfig.json .

ENV NODE_ENV=production

CMD [ "bun", "src/http/server.ts" ]

EXPOSE 3000