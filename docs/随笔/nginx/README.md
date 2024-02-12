## 介绍

支持高并发、防爬虫、性能瓶颈分析、访问限制、客户端缓存、静态资源压缩、代理服务

## 目录介绍

查看目录

- rpm -ql nginx

日志轮转,定时清理日志

- /etc/logrotate.d/nginx

nginx主配置

- /etc/nginx/nginx.conf

nginx默认配置

- /etc/nginx/conf.d/default.conf

设置http协议中content-type与拓展名对应关系

- /etc/nginx/mime.types

守护进程管理方式

- /usr/lib/systemd/system/nginx-debug.service
- /usr/lib/systemd/system/nginx.service
- /etc/sysconfig/nginx
- /etc/sysconfig/nginx-debug

nginx服务的启动管理命令

- /usr/sbin/nginx
- /usr/sbin/nginx-debug

nginx的缓存目录

- /var/cache/nginx

nginx日志目录

- /var/log/nginx

## 主要配置

- vim /etc/nginx/nginx.conf

可以设置客户端和服务端超时时间、压缩方式、文件传输方式

- vim /etc/nginx/conf.d

可以设置监听端口，其中参数解释如下：

```nginx
server {
    location / {        // '/'代表仅访问location下的root路径
        root /path;
        index index.html
    }
}
```

## 命令

启动服务

- nginx -c /etc/nginx/nginx.conf

重启服务

- nginx -s reload

测试文件的语法是否正确（用于当需要重载服务时保证文件可用）

- nginx -tc /etc/nginx/nginx.conf

## 访问限制

### 限制访问ip

允许某ip访问，禁止其他ip访问

```nginx
location ~ ^/admin.html {
    root /opt/app/code;
    allow 222.128.189.17;
    deny all;
    index index.html index.htm;
}
```

禁止某ip访问，允许其他ip访问

```nginx
location ~ ^/admin.html {
    root /opt/app/code;
    deny 222.128.189.17;
    allow all;
    index index.html index.htm;
}
```

http_auth_basic_module

基于Nginx的访问登陆，由于依赖文件存储方式，所以不提倡


gzip压缩文件，优点是客户端可以更快获取到资源，缺点是耗费服务端性能。

```nginx
location ~ ^/download {
    gzip_static on;
    tcp_nopush on;
    root /opt/app/code;
}

location ~ .*\.(jpg|gif|png)$ {
    gzip on;
    gzip_http_version 1.1;
    gzip_comp_level 2;
    gzip_types text/plain application/javasript application/x-javascript text/css image/jpeg image/gif image/png;
    root /opt/app/code/assets;
}
```

## 缓存策略

- Expires、Cache-Control、Etag和Last-Modified可用于判断浏览器缓存资源是否过期，如果是的话请求资源，不是的话就使用缓存。
- 当第一次请求资源时，状态200，请求头无内容；第二次请求资源时，状态是304，请求头有缓存状态信息。

```nginx
location ~ .*\.(htm|html)$ {
    expires 24h;
    root /opt/app/code;
}
```

```nginx
# 资源响应头
{
    Cache-Control: max-age=86400            # 资源可使用时长(s)
    Expires: Mon,17 Jun 2017 13:14:00 GMT   # 过期时间
}
```

## 跨域限制

```nginx
location ~ .*\.(htm|html)$ {
    add_header Access-Control-Allow-Origin http://www.wangzhenxi.com;
    add_header Access-Control-Methods GET,POST,PUT,DELETE,OPTIONS;
}
```

## 代理

### 正向代理

为客户端服务

### 反向代理

为服务端服务

```nginx
location ~ /api {
    proxy_pass http://127.0.0.1:90;
}
```

## HTTPS

http协议不安全，传输过程中会被盗用、信息泄露，被劫取、篡改，导致网站被插入小广告等情况。

部署https证书，将80端口的请求重定向到https协议，配置方法：

```nginx
server {
    listen       80;
    server_name  www.wangzhenxi.com;
    rewrite ^(.*)$  https://$server_name$1 permanent;
}

server {
    listen 443;
    ssl on;
    server_name www.wangzhenxi.com;
    #证书文件
    ssl_certificate     /root/git/server_base/cert/www.wangzhenxi.com_bundle.crt;
    #私钥文件
    ssl_certificate_key /root/git/server_base/cert/www.wangzhenxi.com.key;
    ssl_protocols       TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers         HIGH:!aNULL:!MD5;
    ssl_session_timeout  5m;
    ssl_prefer_server_ciphers  on;

    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
    }
}
```

## 负载均衡

服务器是多核CPU的情况下，多个nodejs进程可以充分使用多核优势。

```nginx
http{
    upstream sampleapp {
        // 可选配置项，如 least_conn，ip_hash
        server 127.0.0.1:3000;
        server 127.0.0.1:3001;
        // ... 监听更多端口
    }
    ....
    server{
       listen 80;
       ...
       location / {
          proxy_pass http://sampleapp; // 监听 80 端口，然后转发
       }
    }
}
```

