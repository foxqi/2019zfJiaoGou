
## VUE核心讲解
![avatar](img/vue/vue1.jpg)
![avatar](img/vue/vue2.jpg)
![avatar](img/vue/vue3.jpg)
![avatar](img/vue/vue4.jpg)
![avatar](img/vue/vue5.jpg)
![avatar](img/vue/vue6.jpg)


 - 3.vue的指令


![avatar](img/vue/vue8.jpg)
![avatar](img/vue/vue9.jpg)
![avatar](img/vue/vue10.jpg)
![avatar](img/vue/vue11.jpg)

 - 4.vue的表单元素
 
![avatar](img/vue/vue12.jpg)
![avatar](img/vue/vue13.jpg)
![avatar](img/vue/vue14.jpg)
![avatar](img/vue/vue15.jpg)
![avatar](img/vue/vue16.jpg)

 - 5.vue的自定义指令：directive

![avatar](img/vue/vue17_directive1.jpg)
![avatar](img/vue/vue17_directive2.jpg)
![avatar](img/vue/vue17_directive3.jpg)
![avatar](img/vue/vue17_directive4.jpg)
![avatar](img/vue/vue17_directive5.jpg)
![avatar](img/vue/vue17_directive6.jpg)
![avatar](img/vue/vue17_directive7.jpg)
![avatar](img/vue/vue17_directive8.jpg)

 - 6.vue的过滤器：filters
 
![avatar](img/vue/vue17_filters1.jpg)
![avatar](img/vue/vue18_filters2.jpg)
![avatar](img/vue/vue18_filters3.jpg)

 - 7.vue的监听属性：computer与watch区别

![avatar](img/vue/vue19_computedAmethods1.jpg)
![avatar](img/vue/vue19_computedAmethods2.jpg)
![avatar](img/vue/vue19_computedAmethods3.jpg)
![avatar](img/vue/vue19_computedAmethods4.jpg)
![avatar](img/vue/vue19_computedAmethods5.jpg)

 - 8.vue的动画：animate

![avatar](img/vue/vue20_animate1.jpg)
![avatar](img/vue/vue20_animate2.jpg)
![avatar](img/vue/vue20_animate3.jpg)
![avatar](img/vue/vue20_animate4.jpg)
![avatar](img/vue/vue20_animate5.jpg)
![avatar](img/vue/vue20_animate6.jpg)
![avatar](img/vue/vue20_animate7.jpg)
![avatar](img/vue/vue20_animate8.jpg)
![avatar](img/vue/vue20_animate9.jpg)
![avatar](img/vue/vue20_animate10.jpg)
![avatar](img/vue/vue20_animate11.jpg)

 - 9.用vue写的搜索出现内容效果

![avatar](img/vue/vue21_more1.jpg)
![avatar](img/vue/vue21_more1.jpg)



#### vue的应用
 - 响应式的数据变化，什么样的数据可以发生变化
 - vue中的指令14个
 - 自定义指令 自定义过滤器
 - computed watch methods
 - vue动画 在js中如何使用动画 用css如何实现动画


 ### vue的组件应用
 - vue的树组件
 - vue的日历组件
 - 表单组件
 - 扩展表格组件

 ### 组件的应用
 - 组件的生命周期，每个声明周期 做什么内容
 - 组件间的通信 props events parent children ref eventBus vuex
 - render方法 element-ui iview render的方法的使用

 - 10.生命周期

![avatar](img/vue/vue22_lefeCycle1.jpg)
![avatar](img/vue/vue22_lefeCycle2.jpg)

 - 11.组件 component ：复用，方便维护，拆分方便，每个组件间作用域是隔离的，组件间互不干扰，组件间的数据传递，组件就是一个自定义的标签，可以代表一些特定的功能，主要封装  css  html  js   .vue文件
 
![avatar](img/vue/vue23_component1.jpg)
![avatar](img/vue/vue23_component2.jpg)
![avatar](img/vue/vue23_component3.jpg)
![avatar](img/vue/vue23_component4.jpg)
![avatar](img/vue/vue23_component5.jpg)
![avatar](img/vue/vue23_component6.jpg)
![avatar](img/vue/vue23_component7.jpg)
![avatar](img/vue/vue23_component8.jpg)
![avatar](img/vue/vue23_component9.jpg)

 - 12.插槽 solt
![avatar](img/vue/vue24_slot1.jpg)
![avatar](img/vue/vue24_slot2.jpg)
![avatar](img/vue/vue24_slot3.jpg)
![avatar](img/vue/vue24_slot4.jpg)

 - 13.provide(在根组件中注入数据)&inject(在子组件中消费数据)
![avatar](img/vue/vue25_inject1.jpg) 
 
 - 14.ref
 ![avatar](img/vue/vue26_ref1.jpg)
 ![avatar](img/vue/vue26_ref2.jpg)
 ![avatar](img/vue/vue26_ref3.jpg)
 
 - 15.brother
 ![avatar](img/vue/vue27_brother1.jpg)
 
 - 16.input
 ![avatar](img/vue/vue27_input1.jpg)
 
 - 17.vuecli安装
 ![avatar](img/vue/vue28_vuecli.jpg) 
  - vuecli应用，iview应用，组件的应用讲解
  
  
- npm install -g @vue/cli ??和图片不一致  
![avatar](vueRouter/img/配置vuecli1.jpg) 
![avatar](vueRouter/img/配置vuecli2.jpg) 
![avatar](vueRouter/img/配置vuecli3.jpg) 
![avatar](vueRouter/img/配置vuecli4.jpg) 
![avatar](vueRouter/img/配置vuecli5.jpg) 
![avatar](vueRouter/img/配置vuecli6.jpg) 
- 之后 进入项目，yarn serve
- 最后会给访问路径，访问即可
 
 assets  -- 图片资源，公共样式
 components  -- 放组件的
 App.vue -- 里面有模板，脚本和样式
 main.js -- 渲染模块
 
- 自己要建一个vue.config.js文件，来自己配置webpack 
![avatar](vueRouter/img/vuecli配置webpack1.jpg) 
![avatar](vueRouter/img/vuecli配置webpack2.jpg) 
![avatar](vueRouter/img/vuecli配置webpack3.jpg) 

- yarn add axios 安装axios

-  打包 npm run build
 
   
 - vue的日期插件，手写了一个类似的日历插件，里面有些如何获取四十二天后的方法  
 
 
 
 
 ### vue-router  部分配置截图
 
  ![avatar](img/vue/vueRouter1.jpg) 
  ![avatar](img/vue/vueRouter2.jpg) 
  ![avatar](img/vue/vueRouter3.jpg) 
  ![avatar](img/vue/vueRouter4.jpg) 
 
 ###### 老师课件同步代码
 ![avatar](vueRouter/img/vueRouter的小项目构图.jpg)
 - 1.先安装 yarn add vue-router
 
 
 
 
 ### 单元测试
 
- mocha-chai用法
 ![avatar](img/vue/lessonTest1.jpg) 
 ![avatar](img/vue/lessonTest2.jpg) 
 ![avatar](img/vue/lessonTest3.jpg) 
 ![avatar](img/vue/lessonTest4.jpg) 
 ![avatar](img/vue/lessonTest5.jpg) 
 ![avatar](img/vue/lessonTest6.jpg) 
 ![avatar](img/vue/lessonTest7.jpg) 
 ![avatar](img/vue/lessonTest8.jpg) 
 ![avatar](img/vue/lessonTest9.jpg) 
 ![avatar](img/vue/lessonTest9-1.jpg) 
 ![avatar](img/vue/lessonTest10.jpg) 
 ![avatar](img/vue/lessonTest11.jpg) 
- https://github.com/axios/moxios

- jest用法
 ![avatar](img/vue/lessonTest12.jpg) 
 
 
 
 
 
 
 
 
### vue组件数据传递 
 
- 父子组件通信
  父->子props，子->父 $on、$emit （发布订阅）
 获取父子组件实例的方式 $parent、$children
- Ref 获取实例的方式调用组件的属性或者方法
- 在父组件中提供数据子组件进行消费，Provide、inject 官方不推荐使用，但是写组件库时很常用

- 兄弟组件通信
- Event Bus 实现跨组件通信 Vue.prototype.$bus = new Vue
  - eventBus 定义到了全局上，如果一个人发布一个时间，如果有同名的会全部触发，在大型项目有重名的，不管是儿子还是父亲就会全部触发，所以一般在小型项目上使用
- Vuex

- 跨级组件通信
  - Vuex
  - $attrs、$listeners
  ```
        <!-- $attrs 表示属性的集合-->
        <!-- $listeners  表示的是方法的集合-->
        <!-- v-bind  属性-->
        <!-- v-on  方法-->
        <!--这个方法就可以代替props-->
        <Grandson2 v-bind="$attrs" v-on="$listeners"></Grandson2>
  ```
  - Provide、inject
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 