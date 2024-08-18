function canAccessWebsite(age){
    if (age < 18){
        return false;
    } 
    return true;
    
    
}

console.log (canAccessWebsite(20));

const canAccessWebsite2 = age => age < 18 ? "No" : "YES";
console.log (canAccessWebsite2(16))
