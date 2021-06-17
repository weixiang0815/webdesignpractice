var myName = "Henry The Wang";
var myStreet = "Baker Street 117.";
var myCity = "Far Far Away Kingdom";
var myPhone = "0123-456-789";

console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.indexOf("y"));
console.log(myName.lastIndexOf("n"));
console.log(myName);
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());

var firstName = myName.slice(0, myName.indexOf(" "));
console.log(firstName);

var lastName = myName.slice(myName.lastIndexOf(" ") + 1);
console.log(lastName);

var myAddress = myStreet.concat(" ", myCity);
console.log(myAddress);

console.log(myPhone);
myPhone = myPhone.replaceAll("-", "");
console.log(myPhone);