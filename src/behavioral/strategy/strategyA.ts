import { Strategy } from './strategy';
export class ConcreteStrategyA implements Strategy {
  doAlgorithm(data: string[]): string {
    return data.join('-');
  }
}
