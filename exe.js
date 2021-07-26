const sumofeven = (numbers) => {
    let sum=0;
numbers.forEach(element => {
    if(element%2==0) {
        sum = sum+element
        }
});
return `sum of only even no. is=${sum}`

}
console.log(sumofeven([5,2,7,9,10,8,17,115,10]));

const sumofevenodd = (num) => {
let sumeven = 0;
let sumodd = 0;
num.forEach(element => {
    element % 2==0
    ? (sumeven= sumeven+element)
    : (sumodd=sumodd+element)
    
});
return `sum of even numbres=${sumeven} and sum of odd numbers=${sumodd} total sum=${sumeven+sumodd}`;
};

console.log(sumofevenodd([5,2,7,9,10,8,17,115,10]));
