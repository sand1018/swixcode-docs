# ===== 阶段 1：构建 =====
FROM node:20-alpine AS builder

# VitePress lastUpdated 需要 git
RUN apk add --no-cache git

WORKDIR /app

# 先复制依赖文件，利用 Docker 缓存
COPY package.json package-lock.json ./
RUN npm ci

# 复制源文件并构建
COPY .git .git
COPY docs/ docs/
RUN npm run docs:build

# ===== 阶段 2：运行 =====
FROM nginx:alpine

# 复制自定义 Nginx 配置
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 从构建阶段复制静态产物
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
