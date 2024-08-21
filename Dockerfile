# syntax = docker/dockerfile:1

ARG BUN_VERSION=1.1.21
FROM oven/bun:${BUN_VERSION} AS base

LABEL fly_launch_runtime "Bun"

WORKDIR /app

ENV NODE_ENV "production"

FROM base AS build
FROM debian:stable-20240812-slim

RUN apt-get update -qq && apt-get upgrade -y && \ 
    apt-get install -y python-is-python3 pkg-config build-essential

COPY --link bun.lockb package.json ./
RUN bun install --ci 

# --update-all

COPY --link . ./

FROM base

COPY --from=build /app /app

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"
CMD [ "bun", "src/index.tsx" ]