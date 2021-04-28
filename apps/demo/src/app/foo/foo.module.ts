import { CommonModule } from '@angular/common';

import { NgModule, Component } from '@angular/core';

@Component({
  selector: 'acme-foo',
  template: `<h1>From "app/foo" folder</h1>`,
  styles: [],
})
export class FooComponent {}

@NgModule({
  imports: [CommonModule],
  declarations: [FooComponent],
  exports: [FooComponent],
})
export class FooModule {}
