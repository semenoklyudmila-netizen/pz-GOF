import { Strategy } from './strategy';
export class Context {
  constructor(private strategy: Strategy) {}
  setStrategy(s: Strategy) { this.strategy = s; }
  execute() {
    const result = this.strategy.doAlgorithm(['a','b','c']);
    console.log('Strategy result:', result);
  }
}
