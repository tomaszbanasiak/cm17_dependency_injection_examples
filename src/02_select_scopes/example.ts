import { OverallCrashTestClass } from '../dummy';
import { container } from './inversify.config';

console.log('Selective use singleton scope');

const testClass = container.get<OverallCrashTestClass>(OverallCrashTestClass);

testClass.execute();
