import { NgModule } from '@angular/core';
import { BestAndLessFeaturesModule } from './bestandless-features.module';
import { BestAndLessCoreModule } from './bestandless-core.module';

@NgModule({
  imports: [BestAndLessFeaturesModule, BestAndLessCoreModule],
})
export class BestAndLessModule {}
