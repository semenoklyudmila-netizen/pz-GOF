import { Context } from './context';
import { ConcreteStrategyA } from './strategyA';
import { ConcreteStrategyB } from './strategyB';
const ctx = new Context(new ConcreteStrategyA());
ctx.execute();
ctx.setStrategy(new ConcreteStrategyB());
ctx.execute();
