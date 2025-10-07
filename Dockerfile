FROM node:22 AS builder

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm i -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN npm run prisma:generate
ENV NODE_ENV=production
RUN npm run build

FROM node:22-slim

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/package.json package.json
COPY --from=builder /app/pnpm-lock.yaml pnpm-lock.yaml
COPY --from=builder /app/dist ./dist

RUN npm i -g pnpm pm2
RUN pnpm install --prod --frozen-lockfile

CMD ["pm2-runtime", "dist/index.js"]