var t = new Object(),
   t1 = t;
t.name = 'test';
t1.name = 'TEST';
console.log(t.name); 
//

var t1 = 'T1';
function test (){
	t2 = 'T2';
}
test();
console.log(t1);
console.log(t2);
console.log(window.t2);
console.log(window.t1);
//
var t = 'T';
function test (){
	var t = 'T1';
	function test1(){
	var t = 'T2';
		console.log(t);
	}
	function test2(){
		console.log(t);
	}
	test1();
	test2();
}
test();

//
var person = function(){    
    //变量作用域为函数内部，外部无法访问    
    var name = "default";       
    return {    
       getName : function(){    
           return name;    
       },    
       setName : function(newName){    
           name = newName;    
       }    
    }    
}();   
console.log(person.name) ;
person.getName();
person.setName("abruzzi");    
person.getName();

//console.log();
//这里返回udefined是因为上面的函数没有返回name属性 