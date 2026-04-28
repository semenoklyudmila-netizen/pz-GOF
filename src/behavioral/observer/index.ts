import { ConcreteSubject } from './subject';
import ConcreteObserver from './concreteObserver';
const subject = new ConcreteSubject();
const o1 = new ConcreteObserver('A');
const o2 = new ConcreteObserver('B');
subject.attach(o1);
subject.attach(o2);
subject.setState('state1');
subject.setState('state2');
