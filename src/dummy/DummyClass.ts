import "reflect-metadata";
import { faker } from '@faker-js/faker';
import { injectable } from 'inversify';

@injectable()
export class DummyClass {
    private name: string;
    private lastName: string;

    constructor() {
        this.name = faker.name.firstName();
        this.lastName = faker.name.lastName();
    }

    public greet() {
        return `Hello, i am ${this.name} ${this.lastName}!`;
    }
}
