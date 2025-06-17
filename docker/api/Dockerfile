# ./docker/api/Dockerfile
FROM node:22

WORKDIR /api

COPY api .

RUN npm install
RUN npm run build
CMD ["npm", "run", "start"]
