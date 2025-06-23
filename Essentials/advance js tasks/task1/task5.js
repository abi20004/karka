const list=[1,2,3,4,5];

function words(value){
    return value.reduce((acc,num) => acc*num,1);
}
const result=words(list)
console.log(result)