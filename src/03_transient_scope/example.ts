import { OverallCrashTestClass, DummyClass } from '../dummy';
import { container } from './inversify.config';

console.log('Use transient scope to fetch all objects in dependency tree as singletons');

const myDummy = container.get<DummyClass>(DummyClass);
const testClass = container.get<OverallCrashTestClass>(OverallCrashTestClass);
console.log(`My private dummy says ${myDummy.greet()}`);
testClass.execute();
