let guest_list : string [] = ['Abbas','Fatima','Raza','Afsheen','Ayan'];

let absent: string = 'Ayan';
let new_guest : string = 'babar azam';
guest_list[1] = new_guest;

guest_list .unshift('shaheen','rizwan','usama');
console.log(`\nunfortunately we can not arrange big table ,only two people allow.`)
while(guest_list.lenght > 2){
    let remmove_guest = guest_list.pop();
    console.log(`sorry sir/madam ,${remmove_guest} you are not invited for dinner.`)
}