//
function script15703(int0: int, string0: string): void {
    switch (int0) {
        case 0: {
            IF_SETTRANS(0, comp(744, 144));
            break;
        }
        case 250: {
            IF_SETTRANS(0, comp(744, 144));
            IF_SETTEXT(string0, comp(744, 144));
            IF_SETONTIMER(callback(), comp(744, 144));
            return;
        }
        default: {
            if ((int0 >= 200)) {
                IF_SETTRANS(MIN(255, (IF_GETTRANS(comp(744, 144)) + 5)), comp(744, 144));
            };
            break;
        }
    };
    IF_SETONTIMER(callback(script15703, (int0 + 1), string0), comp(744, 144));
    return;
}