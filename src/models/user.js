class User{
    id;
    firstName;
    lastName;
    email;
    phoneNumber;
    password;

    constructor(id, firstName, lastName, email, phoneNumber, password ){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}

export default User;