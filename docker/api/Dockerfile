# ./docker/api/Dockerfile
FROM node:22

WORKDIR /api

COPY api .

RUN npm install

CMD ["npm", "run", "start"]