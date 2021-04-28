import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'acme-foo',
  template: `<h1>From "@acme/foo" at v0.0.2</h1>`,
  styles: [],
})
export class FooComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [FooComponent],
  exports: [FooComponent],
})
export class FooModule {}
