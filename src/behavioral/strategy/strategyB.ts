import { Strategy } from './strategy';
export class ConcreteStrategyB implements Strategy {
  doAlgorithm(data: string[]): string {
    return data.reverse().join('|');
  }
}
