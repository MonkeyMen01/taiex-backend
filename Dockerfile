FROM node:18
LABEL authors="yanyu."
ENV version=0.0.1
ENV AppName=taiex
ENV TZ=Asia/Taipei
WORKDIR /app
COPY package.json ./

ENV DB_URL=""
ENV DB_USER=""
ENV DB_PASSWORD=""
ENV DB_HOST=""
ENV LANG C.UTF-8

RUN npm install
COPY . .

EXPOSE 3000

CMD ["node", "src/main/app.js"]
