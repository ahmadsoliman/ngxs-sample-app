import { MatSnackBar, MatSnackBarConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SnackBarService {

    private actionText = 'Ok';
    private successDefaultMessage = 'Successful operation';
    private successConfig = { panelClass: ['successAlert'], duration: 5000 };
    private errorDefaultMessage = 'Sorry, an error ocurred';
    private errorConfig: MatSnackBarConfig = { panelClass: ['errorAlert'], duration: 5000 };
    private warnConfig: MatSnackBarConfig = { panelClass: ['warnAlert'], duration: 5000 };

    constructor(public snackBar: MatSnackBar) { }

    emitSuccessSnackBar(message = this.successDefaultMessage, actionText = this.actionText, config = this.successConfig) {
        this.snackBar.open(message, actionText, config);
    }

    emitErrorSnackBar(message = this.errorDefaultMessage, actionText = this.actionText, config = this.errorConfig) {
        this.snackBar.open(message, actionText, config);
    }

    emitWarnSnackBar(message = this.errorDefaultMessage, actionText = this.actionText, config = this.warnConfig) {
        this.snackBar.open(message, actionText, config);
    }

}
