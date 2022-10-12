import { inject, injectable } from 'inversify';
import "reflect-metadata";
import { DummyClass } from './DummyClass';
import { FrontCrashTest } from './FrontCrashTest';

@injectable()
export class OverallCrashTestClass {
    constructor(
        @inject(DummyClass) private dummy: DummyClass,
        @inject(FrontCrashTest) private frontCrashTest: FrontCrashTest,
    ) {}

    public execute() {
        console.log(`OverallCrashTest dummy says: ${this.dummy.greet()}`);
        this.frontCrashTest.execute();
    }
}
