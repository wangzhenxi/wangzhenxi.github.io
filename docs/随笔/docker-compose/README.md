## 安装

[install Docker Compose](https://docs.docker.com/compose/install/)

## 简介

用于容器编排，负责快速的部署分布式应用。

### 术语

**服务(service)：** 一个应用容器，实际上可以运行多个相同镜像的实例。

**项目(project)：** 由一组关联的应用容器组成的一个完整业务单元。Compose对它进行管理。

## 基本操作

### 常用命令选项

- `-f --file FILE` 指令Compose模板文件，默认为`docker-compose.yml`
- `-p --project-name NAME` 指定项目名称，默认使用所在目录名称作为项目名

### 命令

重新构建容器

- --force-rm 删除构建过程中的临时容器。
- --no-cache 构建镜像过程中不使用 cache（这将加长构建过程）。
- --pull 始终尝试通过 pull 来获取更新版本的镜像。

```sh
$ docker-compose build
```

配置校验

```sh
$ docker-compose config
```

进入容器

```sh
$ docker-compose exec
```

查看日志

```sh
$ docker-compose logs [options] [service]
```

打印某个容器端口所映射的公共端口

```sh
$ docker-compose port [options] SERVICE PRIVATE_PORT
```

拉取服务依赖的镜像

```sh
$ docker-compose pull [option] [service]
```

删除所有（停止状态的）服务容器

- -f, --force 强制直接删除，包括非停止状态的容器。一般尽量不要使用该选项。
- -v 删除容器所挂载的数据卷。

```sh
$ docker-compose rm [option] [service]
```

列出Compose文件中包含的镜像

```sh
$ docker-compose images
```

列出项目中目前的所有容器

```sh
$ docker-compose ps [options] [service]
```

查看各个服务容器内运行的进程

```sh
$ docker-compose top
```

构建镜像，创建服务，启动服务，关联服务相关容器

- -d 在后台运行服务容器。
- --no-deps 不启动服务所链接的容器。
- --force-recreate 强制重新创建容器，不能与 --no-recreate 同时使用。
- --no-recreate 如果容器已经存在了，则不重新创建，不能与 --force-recreate 同时使用。
- --no-build 不自动构建缺失的服务镜像。
- -t, --timeout TIMEOUT 停止容器时候的超时（默认为 10 秒）。

```sh
$ docker-compose up [option] [service]
```

在服务容器里执行指令

```sh
$ docker-compose run [service] echo 'hello'
```

启动已存在的服务容器

```sh
$ docker-compose start [service]
```

停止运行中的服务容器

- `-t --timeout TIMEOUT` 停止容器时候的超时（默认10秒）

```sh
$ docker-compose stop [option] [service]
```

暂停服务容器

```sh
$ docker-compose pause [service]
```

恢复暂停的服务容器

```sh
$ docker-compose unpause [service]
```

停止up命令启动的容器

```sh
$ docker-compose down
```

强制停止服务容器

```sh
$ docker-compose kill [service]
```

重启服务

- -t, --timeout TIMEOUT 指定重启前停止容器的超时（默认为 10 秒）。

```sh
$ docker-compose restart [options] [service]
```

### 模板文件

dcoker-compose.yml

```yml
version: "3"

services:
    app:
        build: ./ # 指定Dockerfile或docker-compose.yml文件的路径，同context
            dockerfile: Dockerfile # 指定Dockerfile文件名
            args: # 指定构建镜像时的变量
                env: dev
            cache_form: # 指定构建镜像的缓存
                - node:lastest
        image: josh:t1 # 指定镜像名称
        container_name: app-$version # 指定容器名称，默认为：项目名称_服务名称_序号
        labels:
            release: "rc for 1.0"
        ports:
            - "100:200"
        volumes:
            - "/data"
        command: echo "hello yml" # 覆盖容器启动后默认执行的命令
        depends_on: # 等待db容器启动完成后执行
            - db
        dns: # 指定dns服务器
            - 8.8.8.8
            - 114.114.114.114
        tmpfs: # 挂载文件系统到容器
            - /data
        env_file: # 基于yml模板文件路径，指定环境变量文件，环境变量文件如下
            - ./common.env
        environment: # 环境变量
            - NODE_ENV=development
        expose: # 服务暴露端口
            - "3000"
        extra_hosts: # 指定host名称映射
            - "wangzhenxi.com:8.8.8.8"
```

环境变量文件env_file

```env
NODE_ENV=development
```
