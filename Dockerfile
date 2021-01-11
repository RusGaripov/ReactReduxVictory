FROM nginx

COPY package.json .

RUN npm install

RUN npm build

CMD ["npm","start"]
