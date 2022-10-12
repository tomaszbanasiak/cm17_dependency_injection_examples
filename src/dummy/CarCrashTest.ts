import { inject, injectable } from 'inversify';
import "reflect-metadata";
import { DummyClass } from './DummyClass';

@injectable()
export class CarCrashTest {
    constructor(
        @inject(DummyClass) private dummy: DummyClass,
    ) {}

    public execute() {
        console.log(`My dummy says: ${this.dummy.greet()}`)
    }
}
