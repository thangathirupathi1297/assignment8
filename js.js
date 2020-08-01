

/*Having numbers ‘X=20’, ‘Y=10’ and ‘Z=15’, find the greatest among these
three numbers using conditional operator.*/
var x=20;
var y=10;
var z=15;
var greater;
var less;
less=(x<y && x<z) ? "x is a lower value":(y<z)? "y is lower value": "z is lower value";
greater=(x>y && x>z) ? "x is a higher value":(y>z)? "y is higher value": "z is higher value";
document.getElementById("higher").innerHTML= ("</br></br>" + greater);
document.getElementById("lower").innerHTML=("</br></br>" + less);

/*Having numbers ‘M=50’ and ‘N=10’, swap their values without using a third
variable.*/

var M=50,N=10;
var before="before the swap: ";
document.write("</br></br></br>" + before,"</br>" + M,"</br>" + N) ;
var after="after the swap";
M=M/N;
N=M*N;
M=N/M;
document.write("</br></br></br>" + after,"</br>" + M,"</br>" + N) ;
document.write("</br></br></br>") 

/*Initializing two numbers ‘N1=18’ and ‘N2=6’, perform all arithmetic
operations and print the result.*/
 var N1=18,N2=6;
 // add two operands
 
 var add=N1+N2;
document.write("3.Initializing two numbers N1=18 and N2=6, perform all arithmetic operations and print the result")
 document.write ("</br></br>" + "addition value:" + add);


 //subtract
 var sub=N1-N2;
document.write("</br></br>" + "subtract:" + sub);
//multiply
var mul=N1*N2;
document.write("</br></br>" + "Multiply:" + mul);
//divide
var div=N1/N2;
document.write("</br></br>" + "Division:" + div);
//reminder of division
var remind=N1%N2;
document.write("</br></br>" + "Reminder:" + remind);
//increment
var incre=++N1;
document.write("</br></br>" + "N1 increment:" + incre);
var incre1=++N2;
document.write("</br></br>" + "N2 increment:" + incre1);

var decre=--N1;
document.write("</br></br>" + "N1 decrement:" + decre);

var decre1=--N2;
document.write("</br></br>" + "N2 decrement:" + decre1);



