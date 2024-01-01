let iterator = 0;

console.log(`--for loop-- 0 to 10`);
for (iterator = 0; iterator <= 10; iterator++) console.log(iterator);

console.log(`--while loop-- 0 to 10`);
iterator = 0;
while (iterator <= 10) {
  console.log(iterator);
  iterator++;
}

console.log(`--do while loop-- 0 to 10`);
iterator = 0;
do {
  console.log(iterator);
  iterator++;
} while (iterator <= 10);

console.log(`--for loop-- 10 to 0`);
for (iterator = 10; iterator >= 0; iterator--) console.log(iterator);

console.log(`--while loop-- 10 to 0`);
iterator = 10;
while (iterator >= 0) {
  console.log(iterator);
  iterator--;
}

console.log(`--do while loop-- 10 to 0`);
iterator = 10;
do {
  console.log(iterator);
  iterator--;
} while (iterator >= 0);

for (iterator = 1; iterator <= 7; iterator++) console.log(`#`.repeat(iterator));
/*  
#
##
###
####
#####
######
####### 
*/

for (iterator = 0; iterator <= 10; iterator++)
  console.log(`${iterator} * ${iterator} = ${iterator * iterator}`);
/* 
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

for (iterator = 0; iterator <= 10; iterator++) {
  if (iterator == 0) console.log(`i\ti^2\ti^3`);
  console.log(
    `${iterator}\t${Math.pow(iterator, 2)}\t${Math.pow(iterator, 3)}`
  );
}
/* 
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
*/
