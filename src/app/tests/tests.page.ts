import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { CommonTestResult } from "../../types/tests.model";
import { Slot } from 'src/types/journal.model';

@Component({
    selector: 'app-tests',
    templateUrl: './tests.page.html',
    styleUrls: ['./tests.page.scss'],
})

export class TestsPage implements OnInit {

    testId: string;
    testSlot$: Observable<Slot>

    constructor(private store: Store, private route: ActivatedRoute) {}

    ngOnInit() {
        this.testId = this.route.snapshot.paramMap.get('id');
        this.testSlot$ = this.store.select(state => state.journal.slots.find(slot => slot.id === this.testId));
    }
}
