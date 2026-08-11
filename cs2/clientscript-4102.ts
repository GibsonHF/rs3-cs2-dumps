//
function script4102(int0: number, int1: number): void {
    if ((script4550(847) == 0)) {
        return;
    };
    if ((int0 == 37)) {
        if ((IF_GETHIDE(comp(847, 37)) == false)) {  // modal_confirm:yes_button_layer
            script8841(int1, 0);
            if ((IF_GETHIDE(comp(847, 23)) == true)) {  // modal_confirm:yes_button_checked_active_layer
                IF_RESUME_PAUSEBUTTON(55509014);
            } else {
                IF_RESUME_PAUSEBUTTON(55509015);
            };
        };
    } else if ((int1 == 48)) {
        if ((int0 == 16)) {
            if ((IF_GETHIDE(comp(847, 37)) == false)) {  // modal_confirm:yes_button_layer
                script8841(int1, 0);
                if ((IF_GETHIDE(comp(847, 23)) == true)) {  // modal_confirm:yes_button_checked_active_layer
                    IF_RESUME_PAUSEBUTTON(55509014);
                } else {
                    IF_RESUME_PAUSEBUTTON(55509015);
                };
            };
        } else if ((int0 == 69)) {
            if ((IF_GETHIDE(comp(847, 35)) == false)) {  // modal_confirm:no_button_layer
                script8841(int1, 0);
                if ((IF_GETHIDE(comp(847, 14)) == true)) {  // modal_confirm:no_button_checked_active_layer
                    IF_RESUME_PAUSEBUTTON(55509005);
                } else {
                    IF_RESUME_PAUSEBUTTON(55509006);
                };
            };
        } else if ((((int1 == 48) && (int0 == 17)) && (IF_GETHIDE(comp(847, 35)) == false))) {  // modal_confirm:no_button_layer
            script8841(int1, 0);
            if ((IF_GETHIDE(comp(847, 14)) == true)) {  // modal_confirm:no_button_checked_active_layer
                IF_RESUME_PAUSEBUTTON(55509005);
            } else {
                IF_RESUME_PAUSEBUTTON(55509006);
            };
        };
    } else if ((int0 == 69)) {
        if ((IF_GETHIDE(comp(847, 35)) == false)) {  // modal_confirm:no_button_layer
            script8841(int1, 0);
            if ((IF_GETHIDE(comp(847, 14)) == true)) {  // modal_confirm:no_button_checked_active_layer
                IF_RESUME_PAUSEBUTTON(55509005);
            } else {
                IF_RESUME_PAUSEBUTTON(55509006);
            };
        };
    } else if ((((int1 == 48) && (int0 == 17)) && (IF_GETHIDE(comp(847, 35)) == false))) {  // modal_confirm:no_button_layer
        script8841(int1, 0);
        if ((IF_GETHIDE(comp(847, 14)) == true)) {  // modal_confirm:no_button_checked_active_layer
            IF_RESUME_PAUSEBUTTON(55509005);
        } else {
            IF_RESUME_PAUSEBUTTON(55509006);
        };
    };
    return;
}