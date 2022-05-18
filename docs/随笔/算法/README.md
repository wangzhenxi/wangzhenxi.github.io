## 优先级

- 广度优先
- 深度优先

## 排序

### n^2算法

父子重复遍历

### nlogn算法

Merge Sort归并排序法

将数组拆分成单个后进行两两排序，接着四四排序，接着八八排序，逐步合并到整体合并

```javascript
const left = [1,3,5,7];
const right = [2,4,6,8];
let arr = new Array(8);
let cur = 0;
let i = 0;
let j = 0;
for(let cur = 0; cur < arr.length ; cur ++){
    if(left[i]<right[j]){
        arr[cur] = left[i];
        i++;
    }else{
        arr[cur] = right[j];
        j++;
    }
};
console.log(arr);
```

### faster算法

暂无

### 二叉树

一个只有左右值和当前值的树

难点：做个添加、搜索、移除节点

```javascript
node = {
    left: '',
    key: '',
    right: ''
}
```

#### 邻接矩阵

二维数组中的二进制矩阵

规律是：相邻俩成员值为1

```javascript
[
    [1,2,3,4,5],
    [6,7,8,9,0]
]
```

#### 邻接表

二维数组中，只有俩列

```javascript
[
    1: [2,3,4,5],
    6: [7,8,9,0]
]
```

#### 关联矩阵

当俩点有关时，值为1，否则为0

```javascript
[
    [1,0,0,1,0]
    [0,1,0,0,0]
    [0,0,1,1,0]
    [1,0,1,0,0]
    [0,0,0,0,0]
]
```

## 小技巧

### 当为某值时取0

当index为4时，index=0

```javascript
index%=4;
```

### 当"||"右值不为0

当index为0时，index=0

```javascript
index = x || 10;
index = x === 0 ? 0 : x || 10;
```

### 生成[rangeL,rangeR]间随机数

```javascript
let n = (rangeR-rangeL)*Math.random()+rangeL
```
    
### 随机数组排序

```javascript
let arr,newArr,i,temp;
arr = [1,8,3,6,8,0,9,8,7,2,9,5,4,6,5];
newArr = [];
arr.forEach(o=>{
	if(!newArr.length) return newArr.push(o);
	temp = '';
	i = 0;
	newArr.forEach(k=>{
		i++;
		if(o>k) {
			temp = i-1;
        }
		if(i == newArr.length){
			if(temp === '') {
				newArr.unshift(o);
			}else {
				newArr.splice(temp+1,0,o);
			}
		}
	})
});
```

### 获取最左值

```javascript
// node = {
//     left: '',
//     key: '',
//     right: ''
// }
while(node && node.left !== null) {
    node = node.left
}
return node.key
```

