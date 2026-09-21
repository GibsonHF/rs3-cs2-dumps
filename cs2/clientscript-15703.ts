//
function script15703(int0: number, string0: string): void {
    switch (int0) {
        case 0: {
            IF_SETTRANS(0, comp(744, 145));  // loginscreen:auth_text
            break;
        }
        case 250: {
            IF_SETTRANS(0, comp(744, 145));  // loginscreen:auth_text
            IF_SETTEXT(string0, comp(744, 145));  // loginscreen:auth_text
            IF_SETONTIMER(callback(), comp(744, 145));  // loginscreen:auth_text
            return;
        }
        default: {
            if ((int0 >= 200)) {
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(744, 145)) + 5)), comp(744, 145));  // loginscreen:auth_text
            };
            break;
        }
    };
    IF_SETONTIMER(callback(script15703, (int0 + 1), string0), comp(744, 145));  // loginscreen:auth_text
    return;
}