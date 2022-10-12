import { Container } from 'inversify';
import { DummyClass, CarCrashTest } from '../dummy';

const container = new Container();
container.bind<DummyClass>(DummyClass).toSelf();
container.bind<CarCrashTest>(CarCrashTest).toSelf();
export { container };
