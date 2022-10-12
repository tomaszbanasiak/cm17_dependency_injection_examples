import { Container } from 'inversify';
import { OverallCrashTestClass, FrontCrashTest, DummyClass } from '../dummy';

const container = new Container({ defaultScope: 'Singleton' });
container.bind<DummyClass>(DummyClass).toSelf();
container.bind<OverallCrashTestClass>(OverallCrashTestClass).toSelf();
container.bind<FrontCrashTest>(FrontCrashTest).toSelf();
export { container };
