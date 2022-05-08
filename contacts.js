var { nanoid } = require("nanoid");
require("colors");


const fs = require("fs").promises;
const path = require("path");


//ścieżka do pliku contacts.json
const contactsPath = path.join(__dirname, "./db/contacts.json");

// funkcja zapisuje listę kontaktów do pliku
const saveContacts = async (data) => {
  try {
    await fs.writeFile(contactsPath, data);
      console.log(`The file ${contactsPath} was succesfully saved!`.green);
      listContacts();
  } catch (err) {
        console.log(`The file ${contactsPath} was NOT succesfully saved!}`.red);
  }
};


// TODO: udokumentuj każdą funkcję
// funkcja zwraca listę wszystkich kontaktów
function listContacts() {
    fs.readFile(contactsPath)
        .then(data => console.table(JSON.parse(data.toString())))
        .catch(err => console.log(err.message));
}

// funkcja zwraca kontakt o podanym ID
function getContactById(contactId) {
    fs.readFile(contactsPath)
        .then(data => {
            const dataContacts = JSON.parse(data.toString());
            contactDataID = dataContacts.filter(contact => contact.id === contactId.toString());
            console.log(contactDataID);
            if (contactDataID.length === 0) {
                console.log(`The contact with the given Id = '${contactId}' does not exist.`.red);
            }
        })
        .catch(err => console.log(err.message));
}

// funkcja usuwa kontakt o podanym ID
function removeContact(contactId) {
    fs.readFile(contactsPath)
        .then(data => {
            const dataContactsStart = JSON.parse(data.toString());
            dataContactsEnd = dataContactsStart.filter(contact => contact.id !== contactId.toString());
            if (dataContactsStart.length === dataContactsEnd.length) {
                console.log(`The contact with the given Id = '${contactId}' does not exist.`.red);
                return;
            }
            else if (dataContactsEnd.length === 0) {
                console.log('The contact list is empty'.red);
            }
            saveContacts(JSON.stringify(dataContactsEnd));   
        }) 
        .catch(err => console.log(err.message));
}

//funkcja dodaje nowy kontakt
function addContact(name, email, phone ) {
    const contact = { id: nanoid(), name: name, email: email, phone: phone };
    fs.readFile(contactsPath)
        .then(data => {
            var dataContacts = JSON.parse(data.toString());
            dataContacts.push(contact);
            saveContacts(JSON.stringify(dataContacts));   
        })
        .catch(err => console.log(err.message));
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}