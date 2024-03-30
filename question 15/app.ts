let guest_list : string [] = ['Abbas','Fatima','Raza','Afsheen','Ayan'];
for(let i=0; i < guest_list.length; i++){
    console.log('Respected sir/madam'  +  guest_list [i] + ',\nwe invited you for dinner tomorrow.\n\nthank you');
}
let absent : string = 'Ayan';
let new_guest : string = 'babar azam';
guest_list[1] = new_guest;
for(let i=0; i <guest_list.length; i++){
    console.log(`Respected sir/madam ${guest_list[i]},\nwe invited you on dinner tomorrow.\n\nthank you`)
}
console.log(`Mr. ${absent} will not coming tomorrow dinner`);