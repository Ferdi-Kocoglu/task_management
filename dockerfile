FROM denoland/deno:alpine-1.42.2

WORKDIR /app

COPY deps.js .

RUN deno cache deps.js

COPY . .

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "app.js"]
