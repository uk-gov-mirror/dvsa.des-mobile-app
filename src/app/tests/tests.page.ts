import { Component, OnInit } from "@angular/core";
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";

@Component({
    selector: 'app-tests',
    templateUrl: './tests.page.html',
    styleUrls: ['./tests.page.scss'],
})

export class TestsPage implements OnInit {

    constructor(private store: Store) {}

    ngOnInit() {
        console.log("Test Page")
    }
}
