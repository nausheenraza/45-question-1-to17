// lowercase 
let personName:string ="Nausheen"
console.log("lowercase:",personName.toLowerCase());

//uppercase
console.log("uppercase:",personName.toLocaleUpperCase())



//title case
console.log("titlecase:",personName.replace(/\)bw/g,c=> c.toUpperCase()))