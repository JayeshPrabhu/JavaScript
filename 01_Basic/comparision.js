// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);

// console.log("2">1); // true
// console.log("02">1); // true

console.log(null>0);
console.log(null==0);
console.log(null >=0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

console.log("2" === 2); 

console.log(null > 0);      // false
// Relational comparison converts null to number -> 0, so it's 0 > 0, which is false.

console.log(null == 0);     // false
// '==' has a special rule: null is only equal to undefined (and itself), not to any number.

console.log(null >= 0);     // true
// '>=' is defined as NOT (null < 0). null -> 0, so 0 < 0 is false; NOT false => true.

console.log(undefined == 0); // false
// '==' special rule: undefined only equals null (and itself), not 0.

console.log(undefined > 0);  // false
// Relational comparison converts undefined to NaN. Any comparison with NaN is false.

console.log(undefined < 0);  // false
// Same reason as above: NaN < 0 is false (all relational comparisons with NaN are false).




