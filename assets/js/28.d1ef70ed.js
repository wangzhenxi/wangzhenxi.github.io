(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{451:function(t,a,s){t.exports=s.p+"assets/img/WechatIMG291.ccb17c14.png"},452:function(t,a,s){t.exports=s.p+"assets/img/WechatIMG292.29a6b507.jpeg"},453:function(t,a,s){t.exports=s.p+"assets/img/WechatIMG293.620e0fc7.jpeg"},454:function(t,a,s){t.exports=s.p+"assets/img/WechatIMG294.9e127bf9.jpeg"},517:function(t,a,s){"use strict";s.r(a);var e=s(19),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"k8s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k8s"}},[t._v("#")]),t._v(" k8s")]),t._v(" "),a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("ul",[a("li",[t._v("自动化容器的部署和复制")]),t._v(" "),a("li",[t._v("随时扩展或收缩容器规模")]),t._v(" "),a("li",[t._v("将容器组织成组，并提供容器间负载均衡")]),t._v(" "),a("li",[t._v("很容易地升级应用程序的新版本")])]),t._v(" "),a("h2",{attrs:{id:"名词"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词"}},[t._v("#")]),t._v(" 名词")]),t._v(" "),a("ul",[a("li",[t._v("Deployment 部署")])]),t._v(" "),a("p",[t._v("可创建镜像和容器")]),t._v(" "),a("ul",[a("li",[t._v("Pod 容器组")])]),t._v(" "),a("p",[t._v("最小可用单元，与worker节点（Node）绑定，可包含一个或多个容器，以及共享资源（网络、存储、容器）")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Node 节点")])]),t._v(" "),a("li",[a("p",[t._v("Service 服务")])]),t._v(" "),a("li",[a("p",[t._v("Labels 标签")])]),t._v(" "),a("li",[a("p",[t._v("LabelSelector 标签选择器")])])]),t._v(" "),a("h2",{attrs:{id:"k8s基础架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#k8s基础架构"}},[t._v("#")]),t._v(" k8s基础架构")]),t._v(" "),a("p",[a("img",{attrs:{src:s(451),alt:"image"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(452),alt:"image"}})]),t._v(" "),a("p",[a("img",{attrs:{src:s(453),alt:"image"}})]),t._v(" "),a("h2",{attrs:{id:"kubectl指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubectl指令"}},[t._v("#")]),t._v(" kubectl指令")]),t._v(" "),a("ul",[a("li",[t._v("应用YAML文件")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" xxx.yaml\n")])])]),a("ul",[a("li",[t._v("查看Deployment")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl get deployments\n")])])]),a("ul",[a("li",[t._v("查看Pod")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl get pods\n")])])]),a("ul",[a("li",[t._v("显示有关资源的详细信息")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl describe deployment "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("deployment名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[t._v("查看容器日志")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl logs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pod名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[t._v("在pod的容器环境内执行命令")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-it")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Pod名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("指令"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[t._v("查看所有节点列表")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl get nodes "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" wide\n")])])]),a("ul",[a("li",[t._v("查看节点状态")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl describe "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-node-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("ul",[a("li",[t._v("查看集群信息")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl cluster-info\n")])])]),a("ul",[a("li",[t._v("查看apiserver情况")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v(" kubectl logs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" kube-system "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--tail")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" kube-apiserver-farmer \n")])])]),a("ul",[a("li",[t._v("编辑配置")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl edit "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("kindType"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("metadata.name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[t._v("创建配置文件")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl create configmap "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" --from-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("rename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(".yaml"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("./config.yaml\n")])])]),a("ul",[a("li",[t._v("查看标签")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl get pods --show-labels\n")])])]),a("ul",[a("li",[t._v("打标签")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v(" kubectl label "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("node_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("label_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("label_value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("ul",[a("li",[t._v("容器重启")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl get pod PODNAME "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" NAMESPACE "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-o")]),t._v(" yaml "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" kubectl replace "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--force")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" -\n")])])]),a("h2",{attrs:{id:"yaml配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yaml配置"}},[t._v("#")]),t._v(" yaml配置")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Pod.yaml")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Pod\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("namespace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" env "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 命名空间 用于区分环境")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pod"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 项目容器组名称")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 标签键值对")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("appType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inner "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 自定义标签标识，应用类型：inner内部应用 outer外部应用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 容器名称")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("image"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containerPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HOST_IP "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 变量名")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("valueFrom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fieldRef")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("fieldPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" status.hostIP\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NODE_PORT\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("32010")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 变量值")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeSelector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 节点选择器，通过标签匹配节点")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("appType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" inner "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 容器调度到包含该标签的节点上")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodeName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" farmer "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定节点名称")]),t._v("\n")])])]),a("h2",{attrs:{id:"dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dashboard"}},[t._v("#")]),t._v(" Dashboard")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("先下载 "),a("code",[t._v("/root/.kube/kubecfg.p12")]),t._v(" 文件，装进浏览器")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("访问地址：")]),t._v(" https://{k8s-master-ip}:6443/api/v1/namespaces/kubernetes-dashboard/services/https:kubernetes-dashboard:/proxy/#/login")])]),t._v(" "),a("li",[a("p",[t._v("获取token")])])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("kubectl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" kubernetes-dashboard describe secret "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" kubernetes-dashboard get secret "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" admin-user "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $1}'")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n")])])]),a("h2",{attrs:{id:"ingress-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ingress-controller"}},[t._v("#")]),t._v(" Ingress Controller")]),t._v(" "),a("p",[t._v("类似nginx，用于负载均衡，控制worker的路由，主要配置deployment service ingress三套yaml")]),t._v(" "),a("p",[a("img",{attrs:{src:s(454),alt:"image"}})]),t._v(" "),a("h3",{attrs:{id:"deployment-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deployment-yaml"}},[t._v("#")]),t._v(" deployment.yaml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx-deployment.yaml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" apps/v1      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#与k8s集群版本有关，使用 kubectl api-versions 即可查看当前集群支持的版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deployment        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#该配置的类型，我们使用的是 Deployment")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("               "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#译名为元数据，即 Deployment 的一些基本属性和信息")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("deployment        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Deployment 的名称")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#标签，可以灵活定位一个或多个资源，其中key和value均可自定义，可以定义多组，目前不需要理解")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#为该Deployment设置key为app，value为nginx的标签")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这是关于该Deployment的描述，可以理解为你期待该Deployment在k8s中如何使用")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("replicas")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#使用该Deployment创建一个应用程序实例")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#标签选择器，与上面的标签共同作用，目前不需要理解")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("matchLabels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#选择包含标签app:nginx的资源")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这是选择或创建的Pod的模板")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Pod的元数据")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Pod的标签，上面的selector即选择包含标签app:nginx的Pod")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#期望Pod实现的功能（即在pod中部署）")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#生成container，与docker中的container是同一种")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#container的名称")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("1.8.0      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#使用镜像nginx:1.8.0创建container，该container默认80端口可访问")]),t._v("\n")])])]),a("h3",{attrs:{id:"service-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#service-yaml"}},[t._v("#")]),t._v(" service.yaml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx-service.yaml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" v1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Service\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("service   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Service 的名称")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Service 自己的标签")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#为该 Service 设置 key 为 app，value 为 nginx 的标签")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这是关于该 Service 的定义，描述了 Service 如何选择 Pod，如何被访问")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#标签选择器")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#选择包含标签 app:nginx 的 Pod")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("port    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#端口的名字")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("protocol")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" TCP           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#协议类型 TCP/UDP")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("port")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#集群内的其他容器组可通过 80 端口访问 Service")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("nodePort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10040")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#通过任意节点的 10040 端口访问 Service")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("targetPort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将请求转发到匹配 Pod 的 80 端口")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NodePort        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Serive的类型，ClusterIP/NodePort/LoaderBalancer")]),t._v("\n")])])]),a("h3",{attrs:{id:"ingress-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ingress-yaml"}},[t._v("#")]),t._v(" ingress.yaml")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx-ingress.yaml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("apiVersion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" networking.k8s.io/v1beta1\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("kind")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Ingress\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("metadata")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" my"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("ingress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("for"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("nginx  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ingress 的名字，仅用于标识")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("spec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 证书")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("hosts")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" www.wangzhenxi.com "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 证书域名")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("secretName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("secret "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 密钥名称")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("containers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("rules")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Ingress 中定义 L7 路由规则")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" www.wangzhenxi.com   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 根据 virtual hostname 进行路由（请使用您自己的域名）")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("paths")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 按路径进行路由")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("backend")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("serviceName")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" josh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("home  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定后端的 Service 为之前创建的 nginx-service")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("servicePort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n")])])]),a("h3",{attrs:{id:"secret-yaml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secret-yaml"}},[t._v("#")]),t._v(" secret.yaml")]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("kubectl create -f secret.yaml")]),t._v("或者"),a("code",[t._v("kubectl create [kind] [type] [metadata.name] [type.key] [value]")])]),t._v(" "),a("p",[t._v("三种加密类型：")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Service Account")]),t._v("：用来访问Kubernetes API，由Kubernetes自动创建，并且会自动挂载到Pod的/run/secrets/kubernetes.io/serviceaccount目录中；")]),t._v(" "),a("li",[a("strong",[t._v("Opaque")]),t._v("：base64编码格式的Secret，用来存储密码、密钥等；")]),t._v(" "),a("li",[a("strong",[t._v("kubernetes.io/dockerconfigjson")]),t._v("：用来存储私有docker registry的认证信息。")])]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 通过命令创建")]),t._v("\nkubectl create secret tls blog-11020-secret "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--key")]),t._v(" blog.wangzhenxi.com.key "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--cert")]),t._v(" blog.wangzhenxi.com_bundle.crt \n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# secret.yaml")]),t._v("\napiVersion: v1\nkind: Secret\ndata:\n  tls.crt: base64 encoded cert \n  tls.key: base64 encoded key\nmetadata: \n  name: wzlinux-secret\n  namespace: default\n  type: Opaque "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ")]),t._v("\n")])])]),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("h3",{attrs:{id:"安装问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装问题"}},[t._v("#")]),t._v(" 安装问题")]),t._v(" "),a("p",[t._v("无法join到集群")]),t._v(" "),a("p",[a("strong",[t._v("解决方法：")])]),t._v(" "),a("ol",[a("li",[t._v("查看俩宿主机是否ping得通，是否存在网段冲突问题")]),t._v(" "),a("li",[a("code",[t._v("kubeadm token list")]),t._v(" 看是否失效，失效的话通过 "),a("code",[t._v("kubeadm token create --print-join-command")]),t._v(" 重新生成token")])]),t._v(" "),a("p",[t._v("节点问题")]),t._v(" "),a("p",[a("strong",[t._v("解决方法：")])]),t._v(" "),a("p",[t._v("通过"),a("code",[t._v("journalctl -f -u kubelet")]),t._v("查看日志")]),t._v(" "),a("h2",{attrs:{id:"相关文献"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关文献"}},[t._v("#")]),t._v(" 相关文献")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.kuboard.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("k8s教程"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);