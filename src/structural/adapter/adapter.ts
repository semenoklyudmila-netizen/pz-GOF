import { Target } from './target';
import { Adaptee } from './adaptee';

export class Adapter implements Target {
  constructor(private adaptee: Adaptee) {}

  request(): string {
    return "Adapter: " + this.adaptee.specificRequest();
  }
}