function words(num,aim){
    return{
        firstIndex:num.indexOf(aim),
        lastIndex:num.lastIndexOf(aim)
    };
}
const numbers=[1,2,3,2,4,2,5]
const result=words(numbers,2);
console.log(result);

