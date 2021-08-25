function countBs(strg) {
    count = 0;
    for (let i = 0; i < strg.length - 1; i++) {
        //check if string has capital B
        if(strg[i] === "B"){
        //incrase count when a capital B is spotted
            count += 1;
        }
        
    }
    return count;
}

function countChar(strg, char = "B") {
    count = 0;
    for (let i = 0; i < strg.length - 1; i++) {
        //check if string has capital B
        if(strg[i] === char){
        //incrase count when a capital B is spotted
            count += 1;
        }
        
    }
    return count;
}

console.log(countChar('BuBBBBle')) 