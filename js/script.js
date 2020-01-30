//Scoping in JS

//first scoping example 
 var a = "Hello!";
 first();

 function first(){

     var b ="Hi!";
     second();

     function second(){

         var c = "Hey!";
         console.log(a+b+c);
     }
 } // output is Hello!Hi!Hey

 //example 2 
 var a = "Hello!";
 first();

 function first(){

     var b ="Hi!";
     second();

     function second(){

         var c = "Hey!";
         third();
     }
 }
 function third(){
     var d = "abhi";
     console.log(a+d);

 }