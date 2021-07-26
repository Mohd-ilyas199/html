const facingconstforany = (edges,numwire,rate) => {
let sum=0;
for (let i=0; i<edges.length; i++){
    sum=sum + edges[i];
}
return sum *numwire*rate;
};
console.log(`cost of facing is Rs ${facingconstforany([10,15,10,10,10,22],5,12)}/-`);







