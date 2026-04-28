import { Backend } from './abstractions';
export class MobileBackend implements Backend {
  getData(): string { return 'Data from MobileBackend'; }
}
