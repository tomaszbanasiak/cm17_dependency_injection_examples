import { container } from './inversify.config';
import { RearCrashTest } from '../dummy';

console.log('Circular dependencies');

const testClass = container.get<RearCrashTest>(RearCrashTest);

testClass.execute();
