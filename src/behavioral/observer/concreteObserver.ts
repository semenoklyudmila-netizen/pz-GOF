import { Observer } from './observer';
class ConcreteObserver implements Observer {
  constructor(private name: string) {}
  update(state: string): void {
    console.log(`Observer ${this.name} received state: ${state}`);
  }
 }

export default ConcreteObserver