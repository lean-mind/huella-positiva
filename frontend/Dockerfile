# Prepare build assets
FROM node:12.18.0-alpine3.9 AS builder
ARG BUILD_ID=local
LABEL stage=builder
LABEL BUILD_ID=$BUILD_ID
WORKDIR /workspace
COPY . /workspace/
RUN npm install
RUN npm run build
# FIXME: To refactor when the frontend uses dinamic endpoint through variables instead static "localhost" endpoint
ARG BASE_URL
RUN sed -i "s#http://localhost:8080#${BASE_URL}#g" $(grep -r -l "http://localhost:8080" *)
RUN sed -i "s#http://localhost:3000#${BASE_URL}#g" $(grep -r -l "http://localhost:3000" *)

# Serve build
FROM node:12.18.0-alpine3.9
RUN npm install -g serve
WORKDIR /workspace
COPY --from=builder workspace/build /workspace/build/
EXPOSE 5000
ENTRYPOINT ["serve", "-s", "build"]

