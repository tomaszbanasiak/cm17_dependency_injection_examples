import { Container } from 'inversify';
import { OverallCrashTestClass, FrontCrashTest, RearCrashTest, DummyClass } from '../dummy';

const container = new Container();
container.bind<DummyClass>(DummyClass).toSelf();
container.bind<OverallCrashTestClass>(OverallCrashTestClass).toSelf();
container.bind<FrontCrashTest>(FrontCrashTest).toSelf();
container.bind<RearCrashTest>(RearCrashTest).toSelf();

export { container };
