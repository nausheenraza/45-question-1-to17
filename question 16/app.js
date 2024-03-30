var guest_list = ['Abbas', 'Fatima', 'Raza', 'Afsheen', 'Ayan'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/madam' + guest_list[i] + ',\nwe invited you for dinner tomorrow.\n\nthank you');
}
var absent = 'Ayan';
var new_guest = 'babar azam';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/madam ".concat(guest_list[i], ",\nwe invited you on dinner tomorrow.\n\nthank you"));
}
console.log("Mr. ".concat(absent, " will not coming tomorrow dinner"));
guest_list.unshift('shaheen', 'rizwan', 'usama');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected sir/madam' + guest_list[i] + ',\nwe invited you on dinner tomorrow.\n\nthankyou');
}
