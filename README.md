##单向数据流
````
也就是说父组件向子组件传递的数据，子组件不能直接进行修改，如果要修改父组件里面的内容，需要父组件定义一个修改数据的函数，将函数以属性的方式传递给子组件，并绑定父组件的this指向。
````