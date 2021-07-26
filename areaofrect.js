const rectarea = (b,w) => b*w;
const triarea = (b,h) => (1 / 2) * b * h;

console.log(` AREA OF RECTANGLE IS ${rectarea(10,10)}`);
console.log(`AREA OF TRIANGLE IS ${triarea(10,10)}`);


const x=12;
const b=27;
const h=14;

 console.log(`area of 3rd diagram is ${rectarea(x,b) + triarea(b,h-x)}`);


 const cirarea = (r) => (3.14) * r*r;
 const smcir = (r1) => (3.14)*r*r;
 console.log(`area of circle is ${cirarea(40)}`);

 
 const r=7;
 const r1=5;
 console.log(`area of 4th diagram is ${rectarea(h,b) + triarea(b,x-h) + cirarea(r) -smcir(r1)}`);


