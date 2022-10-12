import { Container } from 'inversify';
import { OverallCrashTestClass, FrontCrashTest, DummyClass } from '../dummy';

const container = new Container();
container.bind<DummyClass>(DummyClass).toSelf().inSingletonScope();
container.bind<OverallCrashTestClass>(OverallCrashTestClass).toSelf();
container.bind<FrontCrashTest>(FrontCrashTest).toSelf();
export { container };
