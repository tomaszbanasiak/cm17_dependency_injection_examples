import { OverallCrashTestClass } from '../dummy';
import { container } from './inversify.config';

console.log('Default scope');

const testClass = container.get<OverallCrashTestClass>(OverallCrashTestClass);

testClass.execute();
