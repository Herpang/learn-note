





//第一个 去重算法
//先准备好要去重的数组
var arr = [1,2,12,12,3,4,4,5,5,14,6,8,8,8,8,9,11,12,6,6,6,12,14,1,18,5,5,18,19,4,4,56];
//编写去重的函数，注意我们要用到的容器要写到函数里面
function sort(arr){
    var obj = {},
        rearr = [];
    for(var i=0;i<arr.length;i++){
        if(!(obj[arr[i]]===arr[i])){ //如果对象不存在这个属性（也就是说这个元素使我们第一次见到），就进入操作，
            obj[arr[i]] = arr[i];  //将我们第一次见到的这个元素放到无门对象里面
            //我们的这个对象其实就是起一个过滤的作用
            rearr.push(arr[i]); //将第一次见到的元素放到我们准备好的数组里面
        }
    }
    return rearr;
}
console.log(sort(arr));


//选择排序，将数组按照从大到小的顺序排列
var arr = [1,2,12,12,3,4,4,5,5,14,6,8,8,8,8,9,11,12,6,6,6,12,14,1,18,5,5,18,19,4,4,56];
//基本思想是，先用数组里面的第一个和剩下的其他的去比较，
//如果有比他小的，就把较小的值赋给他，然后继续比较，直到找到最小的，
//然后放到我们准备好的数组里面，紧接着在原数组里面删掉刚刚那个最小的，
//如此循环，就可以了，
function sort (arr){
    var rearr = [],
        rt = [],      
        rt = arr.slice(0);
    for(var a = 0;a<arr.length;a++){
        var cct = rt[0]; //后面不能用rt[0]直接比较，会出错
        for(var i = 0;i<rt.length;i++){//判断，去掉最小的那个值之后，剩下的最小的是哪个
            if(rt[0]>rt[i]){
                cct = rt[i];
                console.log(cct);
            }
        }
        rearr.push(cct);
        var index = rt.indexOf(cct);//找到位置 
        rt.splice(index,1);//删除
    }
    return rearr;
}
console.log(sort(arr));
//下面是大神写的更好的版本。
//原理分析：

// 　　1、获取当前数组中最小的那个值。

// 　　2、获取最小值的分析：随便从数组中拿出一个值，把这个拿出来的值当做最小值，然后和后面的值比较，如果后面的值比这个当前的值还小，那么我们把拿出来的那个值赋值成那个更小的值。

// 　　3、保存那个最小值的索引，因为我们需要删除这个最小值，好获取下一轮第二小的值，不然下一轮的最小值还是这个值。

// 　　4、删除数组中的最小值。

// 　　5、因为一次只能获取一个最小值，所以我们需要通过递归，不断地重复调用它。
var arr = [3,6,7,2,6,4,1,6,8,24,12,53];
function sort(arr){
    // 当数组的长度小于1的时候结束递归
    if(arr.length==1){
        return arr;
    }
    var min = arr[0],index = 0;
    for(var i=0;i<arr.length;i++){
        // 计算最小值，如果数组当前值比之前的值还小那么min等于最小值。
        if(arr[i]<min){
            min = arr[i];
            // 保存下最小值的索引，好用来后面删除它
            index = i;
        }
    }
    // 删除最小值
    var prev = arr.splice(index,1);//这里比我写得好，我多了一个获取索引的步骤
    // 通过递归，将这一轮中的最小值合并下一轮的最小值，直到arr的length为1停止递归。
    return prev.concat(sort(arr));  //这里是递归
}
console.log(sort(arr));
//自己动手尝试
var arr = [3,6,7,2,6,4,1,6,8,24,12,53];
function sort() {
    if(arr.length<1){ //这里很重要，要是不写的话，会无限递归下去。
        return arr;
    }
    var min = arr[0],
        index = 0;
    for (var i = 0;i<arr.length;i++){ //因为是递归，这里只需要执行一遍，所以就不用考虑数组长度变化的因素了
        if(min>arr[i]){
            min = arr[i];//将较小的值赋给他
            index = i;//获取索引
        }
    }
    var pre = arr.splice(index,1); // 这里splice方法的返回值就是去掉的那个
    return pre.concat(sort(arr));
}
console.log(sort(arr));



  
