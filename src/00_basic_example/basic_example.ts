import { CarCrashTest } from '../dummy';
import { container } from './inversify.config';

const testClass = container.get<CarCrashTest>(CarCrashTest);
testClass.execute();
