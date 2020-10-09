import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { JournalService } from 'src/services/journal/journal.service';
import { JournalState } from './journal.state';

@NgModule({
  imports: [
    NgxsModule.forFeature([JournalState])
  ],
  providers: [
    JournalService,
  ],
})
export class JournalModule {}
