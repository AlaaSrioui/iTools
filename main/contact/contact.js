var contacts = []
//this is the actual contact, it holds all the contacts that you add, each element of this array is an object of two propreties,
// which are the name and its phone number

function Contact(name, phone){
    this.name = name
    this.phone = phone
}
//this function just creates variables out of the name and the phone number it gots from the input, so the following functions can operate on them

function listContacts(){
    document.getElementById('displayContacts').innerHTML = " "
    for (var i=0;i<contacts.length;i++) {
        document.getElementById('displayContacts').innerHTML += "<tr><td id='name'>" + contacts[i].name +": "+ "</td><td id='phone'>" + contacts[i].phone + "</td><td></div><button class='btn-danger' onclick=deleteContact(" + i + ")>Delete</button></td></tr>"
    }
}
//this function is the one that adds the name and its phone number to the empty table,
//and gives each one of them a button that deletes that spesific contact by invoking the function deleteContact()

function addNewContact(){
    var name = document.getElementById('inputName').value//what we write in the input  of the name
    var phone = document.getElementById('inputPhone').value//what we write in the input  of the phone number
    var contact = new Contact(name, phone)
    console.log(contact)
    contacts.push(contact)
    listContacts()
}
//this is the function that pushes the object of a new contact created with "new keyword" (that creates an object with two propreties name and phone
// that were declared in the function contact) into our array of contacts

function deleteContact(i){
    contacts.splice(i, 1)
    listContacts()
}
//this is the function that invokes when we press the delete button in front of a spesific contact