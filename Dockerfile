# 빌드 단계
FROM node:14 AS builder
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# 실행 단계
FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
# 기본적으로 nginx는 80 포트에서 실행됩니다.
# 필요하다면, nginx 설정을 복사하는 단계를 추가할 수 있습니다.
# 예: COPY nginx.conf /etc/nginx/conf.d/default.conf
