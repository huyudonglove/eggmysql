FROM node:latest

LABEL maintainer="huyd"

RUN mkdir -p /home/www/express
WORKDIR /home/www/express
COPY . /home/www/express
RUN npm install --registry=https://mirrors.huaweicloud.com/repository/npm/

EXPOSE 8090

ENTRYPOINT ["npm","run"]
CMD ["start"]
