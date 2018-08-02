import {
    Input,
    Component
} from '@angular/core';
import {
    IBsObject
} from '../interfaces/ibs-object';

@Component({
    templateUrl: './welcome.component.html'
})

export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    @Input()
    public alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;

    public dDownObj: IBsObject;

    constructor() {
        const successAl: IAlert = {
            id: 1,
            type: 'success',
            message: 'This is a success alert.'
        };

        this.alerts.push(successAl);

        //   this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));

        this.dDownObj = {
            selectedText: "Select a value...",
            ddList: [{
                item: {
                    customId: 3
                },
                itemText: "Item 1"
            },
            {
                item: {
                    customId: 1
                },
                itemText: "Item 2"
            },
            {
                item: {
                    customId: 2
                },
                itemText: "Item 3"
            }
            ]
        };

    }

    public closeAlert(alert: IAlert) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}

export interface IAlert {
    id: number;
    type: string;
    message: string;
}
