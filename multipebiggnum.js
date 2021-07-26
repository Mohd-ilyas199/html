const multbignum = (num1,num2,num3,num4) => {

    let biggnum=0
    biggnum= (num1>num2) ? num1 : num2;
    biggnum= (biggnum>num3) ? biggnum : num3;
    biggnum= (biggnum>num4) ? biggnum : num4; 
    return biggnum;



}
console.log(`bigger no. is ${multbignum(1,2,3,4,)}`);


const bignum = (num1,num2,num3) => Math.max(num1,num2,num3);
console.log(`big no. is ${bignum(2,8,4)}`);