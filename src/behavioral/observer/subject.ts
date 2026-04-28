import { Observer } from './observer';
export class ConcreteSubject {
  private observers: Observer[] = [];
  private state = '';
  attach(o: Observer) { this.observers.push(o); }
  detach(o: Observer) { this.observers = this.observers.filter(x => x !== o); }
  setState(s: string) {
    this.state = s;
    this.notify();
  }
  notify() { this.observers.forEach(o => o.update(this.state)); }
}
