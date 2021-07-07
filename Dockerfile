FROM node
LABEL version="1.0"
LABEL simple node api rest app without frameworks
WORKDIR /server
COPY . /server
RUN npm install
EXPOSE 3000
RUN adduser --disabled-login --disabled-password --no-create-home --shell /sbin/nologin nodeuser
USER nodeuser
HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost:3000/api/sqrt/1 || exit 1
ENTRYPOINT ["npm", "start"]
