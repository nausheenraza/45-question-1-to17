// lowercase 
var personName = "Nausheen";
console.log("lowercase:", personName.toLowerCase());
//uppercase
console.log("uppercase:", personName.toLocaleUpperCase());
//title case
console.log("titlecase:", personName.replace(/\)bw/g, function (c) { return c.toUpperCase(); }));
