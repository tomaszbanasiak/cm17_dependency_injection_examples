import { OldCarCrashTest } from '../dummy';

console.log('Lazy dependency loading');

const testClass = new OldCarCrashTest();
testClass.execute();
