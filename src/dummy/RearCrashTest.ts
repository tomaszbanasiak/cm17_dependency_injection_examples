import { inject, injectable } from 'inversify';
import "reflect-metadata";
import { DummyClass } from './DummyClass';
import { FrontCrashTest } from './FrontCrashTest';
import { OverallCrashTestClass } from './OverallCrashTestClass';

@injectable()
export class RearCrashTest {
    constructor(
        @inject(DummyClass) private dummy: DummyClass,
        @inject(OverallCrashTestClass) private classA: OverallCrashTestClass,
        @inject(FrontCrashTest) private classB: FrontCrashTest,
    ) {
        console.warn(' > Class C initialized');
    }

    public execute() {
        console.log(`Class C dummy says: ${this.dummy.greet()}`);
        this.classA.execute();
        this.classB.execute();
    }

}
