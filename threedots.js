const ages = [ 12, 15, 11, 13];
const ages2 = [ 15,17,14];
const ages3 = [22, 28, 24,23];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
// const allAges2 = [ages, ages2, 5, ages3];
const allAges2 = [...ages, ...ages2, 5, ...ages3]
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 350;
const maximum = Math.max(business, minister, sochib);
// console.log(maximum);

const takaPoisa = [650, 450, 350, 780];
// const maximum = Math.max(takaPoisa);
const maximum = Math.max(...takaPoisa);
console.log(maximum);