const fullUserName = 'Вася aka Terminator Perdinator Пупкин';

const userName = fullUserName.slice(0, fullUserName.indexOf(" "));
console.log (userName);
const userSurName = fullUserName.slice(fullUserName.lastIndexOf(" ")+1, fullUserName.length);
console.log (userSurName);
console.log(userName + ' '+ userSurName)