const operations = [1000, -700, 300, -500, 10000];
let startBalance = 100;

function getBalance(arrayOperations, initialBalance){
    let balance = initialBalance
    for(const element of arrayOperations){
        balance += element;
    }
    return balance;
}
console.log(getBalance(operations, startBalance))

function checkOperations(arrayOperations, initialBalance){
    let balance = initialBalance;
    let isOk = true;
    for(const element of arrayOperations){
        balance += element;
        if (balance<0){
            isOk = false;
            break;
        }
    }
    return isOk;
}
console.log(checkOperations(operations, startBalance))

function averageOperations(arrayOperations){
    let positiveCount = 0;
    let positiveSum = 0;
    let negativeCount = 0;
    let negativeSum = 0;
    for (const element of arrayOperations){
        if (element>0){
            positiveCount++;
            positiveSum += element;
        };
        if (element<0){
            negativeCount++;
            negativeSum += element;
        }
    }
    return [positiveSum / positiveCount, negativeSum / negativeCount];
}
console.log(averageOperations(operations))
