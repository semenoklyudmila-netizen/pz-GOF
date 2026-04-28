import { UI, Backend } from './abstractions';
export class AndroidUI implements UI {
  constructor(private backend: Backend) {}
  render(): void {
    console.log('AndroidUI: Rendering ->', this.backend.getData());
  }
}
