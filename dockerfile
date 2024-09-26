FROM denoland/deno:alpine-1.42.2

EXPOSE 7777

WORKDIR /app

COPY deps.js .

RUN deno cache deps.js

COPY . .

# Add environment variable for DATABASE_URL
ENV DATABASE_URL=postgresql://task_manage_wo0y_user:zxGlRw0lGwUKkODv2QSRQhswn4QXqJXa@dpg-crqk3jm8ii6s73d0609g-a/task_manage_wo0y

CMD ["run", "--allow-net", "--allow-env", "--allow-read", "app.js"]
