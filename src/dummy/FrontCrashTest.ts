import { DummyClass } from './DummyClass';
import { inject, injectable } from 'inversify';
import "reflect-metadata";

@injectable()
export class FrontCrashTest {
    constructor(
        @inject(DummyClass) private dummy: DummyClass,
    ) {}

    public execute() {
        console.log(`FrontCrashTest dummy says: ${this.dummy.greet()}`);
    }
}
