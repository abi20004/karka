let person=`{
    "name":"abirami",
    "gmail":"sakthiabi2499@gmail.com",
    "skills":["HTML","CSS","JS"]
}`
let parseobject=JSON.parse(person)
console.log("name:",parseobject.name)
console.log("gmail:",parseobject.gmail)
console.log("skills:",parseobject.skills.join(","))