FROM node:lts as dependencies
WORKDIR /alpes-landing-page-v2
COPY package.json yarn.lock .dockerignore ./
RUN yarn install --frozen-lockfile

FROM node:lts as builder
WORKDIR /alpes-landing-page-v2
ARG site_url=http://localhost:3000
ENV NEXT_PUBLIC_SITE_URL=$site_url
COPY . .
COPY --from=dependencies /alpes-landing-page-v2/node_modules ./node_modules
RUN yarn build:prod

FROM node:lts as runner
WORKDIR /alpes-landing-page-v2
ENV NODE_ENV production
# If you are using a custom next.config.js file, uncomment this line.
COPY --from=builder /alpes-landing-page-v2/COPYRIGHT ./
COPY --from=builder /alpes-landing-page-v2/next.config.mjs ./
COPY --from=builder /alpes-landing-page-v2/routes.js ./
COPY --from=builder /alpes-landing-page-v2/public ./public
COPY --from=builder /alpes-landing-page-v2/.next ./.next
COPY --from=builder /alpes-landing-page-v2/node_modules ./node_modules
COPY --from=builder /alpes-landing-page-v2/package.json ./package.json

EXPOSE 3000
CMD ["yarn", "start"]