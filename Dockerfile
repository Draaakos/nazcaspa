FROM node:14.8.0-alpine3.12 as builder
WORKDIR /src/code
COPY . /src/code
RUN apk add make
ENV NODE_ENV=production
RUN npm ci --production && make build-front


FROM python:3.8.3-slim-buster
ENV PYTHONUNBUFFERED 1
WORKDIR /app
COPY . /app
RUN mkdir -p static
RUN pip install --no-cache-dir -r dependencies.txt


COPY --from=builder /src/code/static/css/* /app/static/css/
COPY --from=builder /src/code/static/img/* /app/static/img/
COPY --from=builder /src/code/static/js/* /app/static/js/


EXPOSE 8000

ENTRYPOINT [ "sh", "bin/startup.sh" ]