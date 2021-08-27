FROM node:alpine as buildPhase
ARG API_KEY
ENV API_KEY=${API_KEY}
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY ./next.config.js ./
COPY ./tailwind.config.js ./
COPY ./postcss.config.js ./
COPY ./public ./public
COPY ./src ./src
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
