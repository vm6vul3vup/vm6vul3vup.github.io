//Ex1 - random()產⽣0-1之⼩數點亂數
console.log(Math.random());
//Ex2 - floor()無條件捨去⼩數位
console.log(Math.floor(3.1415962));
console.log(Math.floor(-3.1415962));
//Ex3 - 撰寫取得⼀個Range範圍內的整數亂數
function getRandom(min, max) {
    return Math.floor(Math.random() * max + min);
}

// for(var i=0;i < 100;i++)
// {
//     console.log(getRandom(1, 100));
// }

let array1 = [...Array(100).keys()];
let array2 = array1.map(a => a+1);
console.log(array2);

array1.forEach((item,index) => {
    console.log(getRandom(1,100));
});