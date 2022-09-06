import express from "express";
const app = express();
const port = 8000;
import { faker } from '@faker-js/faker';
import User from './models/user.js'
import Company from './models/company.js'

const createUser = () => {
    let newUser = new User (faker.datatype.uuid(), faker.name.firstName(), faker.name.lastName(), faker.internet.email(), faker.phone.number(), faker.internet.password())
    return newUser;
}

const createCompany = () => {
    let address = {
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        zipCode: faker.address.zipCode(),
        country: faker.address.country()
    }
    let newCompany = new Company (faker.datatype.uuid(), faker.company.name(), address )
    return newCompany;
}

app.get("/api/users/new", (req, res) => {
    res.send(createUser());
});

app.get("/api/companies/new", (req, res) => {
    res.send(createCompany());
});

app.get("/api/user/company", (req, res) => {
    res.send({user: createUser(), company: createCompany()});
});


const server = app.listen(port, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
