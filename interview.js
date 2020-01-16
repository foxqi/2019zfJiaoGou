// 二、JavaScript部分
// 1.call和apply的区别是什么，哪个性能更好一些

/*
fn.call(obj,10,20,30);
fn.apply(obj,[10,20,30]);
* call 和apply都是function这个类，原型上的方法，每一个函数作为function上的实例，都可以调用这俩个方法。而这二个方法执行的目的都是用来改变函数中this指向的，让函数执行，并且改变函数中this指向的。
* 区别在于 call传参是一个一个传，apply传参是把所有需要传递的参数以数组的形式保存起来进行传递
*
* 和call和apply同样用来改变this指向的，还有bind，只是bind不会把函数立即执行，只是预先把函数中的this进行处理
*
*
* call的性能要比apply好那么一些（尤其是传递给函数的参数超过三个的时候），所以后期开发的时候，可以使用call多一点
*
* */
/*
let arr=[10,20,30],
    obj={};
function fn(x,y,z) {}
fn.apply(obj,arr);//=>  x=10  y=20  z=30
fn.call(obj,arr);//=>  x=[10,20,30]  y=undefined  z=undefined
fn.call(obj,...arr);//=> 基于es6的展开运输符也可以实现把数组中的每一项一次传递给函数

*/

// => 自己实现性能测试（直供参考）：任何的代码性能测试都是和测试的环境有关系的。比如CPU、内存、GPU等电脑当前性能不会有相同的情况，不同浏览器也会导致性能上的不同；
//console.time可以测试出一段程序执行的时间
//console.profile();在火狐浏览器中安装FireBug,可以更精准的获取到当前程序每一步骤所消耗的时间


/* 会有不同的运行次数
let t1=new Date();
for(let i=0;i<1000000;i++){

}
console.log(new Date()-t1);*/


//打印出A的代码运行10次用多少时间
/*console.time('A');
for(let i=0;i<10;i++){

}
console.timeEnd('A');*/

// 2.实现(5).add(3).minus(2),使其输出结果为：6

/*

5+3-2=6

* 这道题考察的是  类和实例，以及在类的原型上构建方法，并且能够实现链式写法的，指面向对象最为基础的也是最为核心的点
*
* */

// arr.push();
//arr是Array的实例，可以调用Array.prototype上的方法。push就是其中一个
/*

~ function () {
 //   => 每一个方法执行完，都要返回number这个类的实例，这样才可以继续调取number类中的方法，（也就是链式写法）

 function check(n) {//检测值是否正确
   /!* n=Number(n);
    return isNaN(n)?0:n; //检测是否为有效数字*!/

     return (n=Number(n))&&(isNaN(n)?0:n);
 }
 function add(n) {
     n=check(n);
    return this+n;
 }
 function minus(n) {
     n=check(n);
     return this-n;
 }
 Number.prototype.add=add;
 Number.prototype.minus=minus;
/!*懒人写法
["add","minus"].forEach(item=>{
     Number.prototype[item]=eval(item);
 });*!/

    console.log(check(3))
}();

console.log((5).add(3).minus(2))
*/



// 3.箭头函数与普通函数（function）的区别是什么？构造函数（function)可以使用new生成实例，那么箭头函数可以吗？为什么？
/*
* 箭头函数和普通函数的区别：
* 1.箭头函数语法比普通函数更加简洁(es6中每一个函数都可以使用形成赋默认值和剩余运算符)
* 2.箭头函数中没有自己的this，他里面出现的this是继承函数所处的上下文中的this,(使用call/apply等任何方式都无法改变this的指向)。不涉及到this问题，可以随便用，但是涉及到的话要考虑清楚
* 3.箭头函数中没有arguments（类数组），只能基于...arg获取传递的参数集合（数组）
* 4.箭头函数不能被new执行（因为：箭头函数没有this,也没有prototype）
* */

/*
function fn(x) {
    return function (y) {
        return x+y
    }
}
let fn = x=>  y=>x+y

*/

/*let obj={name:'OBJ'};
function fn1() {
    console.log(this)//obj
}
fn1.call(obj)

let fn2=()=>{
    console.log(this);//window
}
fn2.call(obj)*/

/*document.body.onclick=()=>{
    //=>this:window  不是当前操作的body了
}
document.body.onclick=function () {
    //=>this:body
   /!* Array.sort(function (a,b) {
        //=>this:window  回调函数中的this一般都是window
        return a-b;
    })*!/

    Array.sort((a,b) => {
        //=>this:body
        return a-b;
    })
}*/


//回调函数：把一个函数B作为实参传递给另外一个函数A，函数A在执行的时候，可以把传递进来的函数B去执行（执行N次，可传值，可改this，）
//each原理
/*function each(arr,callBack) {
    // => callBack:function(item,index){}
    for (let i=0;i<arr.length;i++){
        /!*let item =arr[i],
            index=i;
            callBack(item,index)*!/
        //简化后
       let flag = callBack.call(arr,arr[i],i);
        //=>接收回调函数返回的结果，如果是false，我们结束循环
        if (flag === false){
           break
        }
    }
}
each([10,20,30,40],function (item,index) {
  //=>this：原始操作数组
    if(index>1){
        return false
    }

})*/

/*
let fn=(...arg)=>{
   // console.log(arguments); //Uncaught ReferenceError: arguments is not defined
    console.log(arg)  //[10,20,30]
}
fn(10,20,30)*/

/*function Fn() {
    this.x=100;
}
Fn.prototype.getX=function () {
    let f = new Fn;
}*/

/*let Fn=()=>{
    this.x=200
}
let f =new Fn; //Fn is not a constructor*/


let arr=[10,20,30,'AA',40,85],
    obj={'p':'a'};

Array.prototype.each =function(callback,that){
    let  arr2=[];
    for(let i=0;i<arr.length;i++){
        let flag = callback.call(that?that:window,arr[i],i);
       if (flag === false){
           arr.splice(0,i);
           for(let i=0;i<arr.length;i++){
               arr2.push(arr[i]);
           }
           // arr2.push(...arr);
           break;
       }

        arr2.push(flag)

    }
    return arr2

}
arr = arr.each(function (item,index) {
    if (isNaN(item)){
        return false;
    }
    return item * 10;
},obj)

console.log(arr)
//得出arr=[100,200,300,'AA',40]









