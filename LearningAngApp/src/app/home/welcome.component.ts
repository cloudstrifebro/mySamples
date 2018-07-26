import { Input, Component } from '@angular/core';

@Component({
    templateUrl: './welcome.component.html'
})

export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
    @Input()
    public alerts: Array<IAlert> = [];
    private backup: Array<IAlert>;

    constructor() {
        let successAl: IAlert = {
            id: 1,
            type: 'success',
            message: 'This is a success alert.'
        };

        this.alerts.push(successAl);

        //   this.backup = this.alerts.map((alert: IAlert) => Object.assign({}, alert));
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
