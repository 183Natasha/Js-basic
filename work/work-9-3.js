// Необходимо написать цикл, который проходит по исходному массиву в обратном порядке и формирует новый массив с обратным порядком элементов.
// Исходный массив: ["!", "js", "люблю", "я"].

const arr = ["!", "js", "люблю", "я"];
const resultArray = [];

for (let i=arr.length-1; i>=0; i=i-1){
    resultArray.push(arr[i]);    
}
console.log(resultArray.join(" "));

console.log(arr.reverse().join(" "));