import { Container } from 'inversify';
import { DummyClass } from '../dummy';

const container = new Container();
container.bind<DummyClass>(DummyClass).toSelf();

export { container };
