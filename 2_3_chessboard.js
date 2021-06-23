let hash = "#";
let space = " ";
let box = "";
count = 0;
for (let i = 1; i <= 8; i++){
    if(count%2 != 0){
        for(let j = 0; j < 8; j++){
            if (j%2 == 0) box += hash;
            else box += space;
        }
    }
    else{
        for (let k = 1; k <= 8; k++){
            if (k%2 != 0) box += space;
            else box += hash;
        }
    }
    box += "\n"
    count += 1;
}
console.log(box);