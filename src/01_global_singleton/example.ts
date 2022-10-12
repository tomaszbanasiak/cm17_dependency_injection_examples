import { OverallCrashTestClass } from '../dummy';
import { container } from './inversify.config';

console.log('Force inversify to use Singleton scope');

const testClass = container.get<OverallCrashTestClass>(OverallCrashTestClass);

testClass.execute();
