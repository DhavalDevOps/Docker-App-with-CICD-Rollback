FROM node:22-alpine

WORKDIR /app

COPY package.json .
RUN npm install --production

COPY app.js .

EXPOSE 3000

HEALTHCHECK --interval=10s --timeout=3s --retries=5 \
    CMD wget -qO- http://localhost:3000/health || exit 1

CMD ["npm", "start"]