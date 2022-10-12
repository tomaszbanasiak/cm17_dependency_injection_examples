import "reflect-metadata";
import { DummyClass } from './DummyClass';
import getDecorators from 'inversify-inject-decorators';
import { injectable } from 'inversify';
import { container } from '../05_lazy_injection/inversify.config';

const { lazyInject } = getDecorators(container, false);
@injectable()
export class OldCarCrashTest {
    @lazyInject(DummyClass)
    private dummy: DummyClass
    constructor(
    ) {}

    public execute() {
        console.log(`Old dummy says: ${this.dummy.greet()}`);
    }
}
