---
title: '蓝牙应用开发'
---

# 蓝牙应用开发

## 简介

记录该项目每日进程

- 编辑器设置
- 协议制定（最好硬件方提供）
- 功能实现测试页

## 名词

- 数位: 一个十六位二进制数是一个字节，如 FF:EE 是两个字节
- 设备: 一个设备下有多个服务
- 服务: 一个服务下有多个特征
- 特征: 每个特征都有各自的是否可读写权限，当有可读权限时才可获取特征值
- ArrayBuffer: 一个用于创建内存大小的原型对象，十六进制数，如 new ArrayBuffer(2) 创建了两个字节的空间
- uint: 无符号整型数。如 Uint8 为 8位二进制无符号整型数，占一个字节
- 模二除法: 按位异或

## 编辑器设置

参照wepy的文档，进行一些编辑器上的设置，需要补充的是，vscode 中的 beautify 插件不支持wpy格式，需下载wepy对应的beautify进行格式化，推荐wpy-beautify。

## BLE

将文档中接口写入测试页中，拿取设备进行测试

#### 测试项

第一阶段：不需要设备

- 蓝牙适配器初始化
- 关闭蓝牙模块
- 获取适配器状态
- 发现周围蓝牙设备
- 停止获取周围蓝牙设备
- 获取已发现蓝牙设备列表
- 获取已连接蓝牙设备列表（需固定设备ID）

第二阶段：需要设备

- 连接蓝牙设备
- 断开连接蓝牙设备
- 获取蓝牙设备服务列表
- 获取指定服务对应的特征列表
- 获取指定特征

第三阶段：需要设备特征有可通知权限

- 订阅特征值
- 接收蓝牙设备发出的特征值（小程序无法显示二进制数，所以需转成十六进制数，并提供给硬件工程师校验是否正确）

第四阶段：需要设备有一个可写特征

- 写入特征值

第五阶段：需要拟定好的蓝牙数据传输协议

- 根据协议规则封装一个解包(蓝牙设备传输过来的数据)和封包(发送给蓝牙设备的数据)的方法
- 类似get和post请求的方式，根据上述方法封装写入特征值方法和读取特征值方法

第六阶段：接入业务逻辑