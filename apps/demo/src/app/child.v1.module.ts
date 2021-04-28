import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooModule } from '@acme/foo-v1';

@Component({
  selector: 'acme-child',
  template: `<acme-foo></acme-foo>`,
  styles: [],
})
class ChildComponent {}

@NgModule({
  declarations: [ChildComponent],
  imports: [
    FooModule,
    RouterModule.forChild([{ path: '', component: ChildComponent }]),
  ],
  providers: [],
})
export class ChildModule {}
