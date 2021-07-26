const mileagecost = (distance,mileage,fuelprice) => Math.ceil(distance/mileage)*fuelprice;
console.log(`amount need to fill the fuel is ${mileagecost(680,13,100)}`);