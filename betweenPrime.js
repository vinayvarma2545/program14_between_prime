const lno = 2;
const hno = 10;
for(let primenos=lno;primenos<=hno;primenos++){
    let flag=0;

    for(let j=2;j<primenos;j++){
        if(primenos%j==0){
            flag=1;
            break;
        }
    }

    if(primenos>1 && flag==0){
    console.log(primenos)
    }
}