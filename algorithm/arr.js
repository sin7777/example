/**
 * 实现两个数组相加之后为一个有序数组
 * 20190411
 */
function arrChange(aArr,bArr){
    aArr.push.apply(aArr,bArr);
    //let newArr = aArr.concat(bArr);
    aArr.sort(function(x,y){
        return x - y;
    })
    return aArr;
}

/**
 * 大数据转换，添加千位分隔符
 */
function changeNum(num){
    let dotArr = (new String(num)).split(','),
        fArr = dotArr[0].split('').reverse(),
        newStr = '';
    for (var i = 3; i < fArr.length; i++){
        fArr.splice(i, 0, ',');
        i = i + 1;
    }
    fArr.reverse();
    newStr = fArr.join('');
    if(dotArr.length == 2){
        newStr = newStr + '.' + dotArr[1];
    }
    return newStr;
}

/**
 * 九九乘法表 —— for
 */
function multipyFn1(){
    var str = '';
    for(var i = 1; i <= 9; i++){
        for(var j = 1; j <= i; j++){
            str += j + 'X' + i + '=' + i*j + '  ';
        }
        str += '\n';
    }
    console.log(str);
}
/**
 * 九九乘法表 ——递归
 */
let str2 = '';
function multipyFn2(n){
    if(n == 1){
        str2 += '1*1=1 \n';
    }else{
        multipyFn2(n-1);
        for(let i = 1; i <= n; i++){
            str2 += i + '*' + n + '=' + i*n +'  ';
        }
        str2 += '\n';
    }
}
multipyFn2(9);
console.log(str2);

 /**
  * 对象数组转换成为数组对象
  */
 var arr = [{'张三':[23,54,65,56]},{'李四':[98,87,87]}]
 function changeObj(strArr){
     console.log("输入的数组："+ JSON.stringify(strArr));
     let newArr = [];
     for(let i = 0; i < strArr.length; i++){
         let obj = strArr[i];
        for(let item in obj){
            // console.log(obj[item]);
            let itemArr = obj[item];
            console.log(itemArr);
            for(let j = 0; j < itemArr.length; j++){
                let newObj = {};
                newObj.name = item;
                newObj.type = itemArr[j].toString();
                newArr.push(newObj);
            }
        }
     }
     console.log("生成的Object对象："+ newArr);
     return newArr;
 }
 changeObj(arr);

 /**
  * 求x的y次方——递归
  */
 function f(x,y){
     if(y === 0){
         return 1;
     }
     return f(x, y-1) * x;
 }

 /**
  * 求数组的最大或者最小值
  */
 let arr = [2,3,4,6,12,4,67,75,54];

 let max = Math.max.apply(Math, arr);  //this指向Math或者null都没有关系
 let min = Math.min.apply(null, arr);

