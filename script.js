

class Contact {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }
}

class AddressBook {
    constructor() {
        this.contact = [];
    }

    add(name,email, phone) {
        let newContact = new Contact(name, email, phone);
        this.contact.push(newContact);
    }
}

