FROM nginx

LABEL maintainer="xuewenG" \
        site="https://github.com/xuewenG/blog.xuewen.me"

WORKDIR /root

COPY . /usr/share/nginx/html
