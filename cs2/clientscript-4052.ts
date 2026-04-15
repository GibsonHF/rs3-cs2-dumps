//
function script4052(int0: component, int1: unknown_int): void {
    if ((int1 == 1)) {
        if ((IF_GETY(int0) < (1 - IF_GETHEIGHT(int0)))) {
            IF_SETONTIMER(callback(), int0);
            IF_SETHIDE(1, int0);
        } else {
            IF_SETPOSITION(0, (IF_GETY(int0) - 1), 2, 0, int0);
            if ((IF_GETTRANS(int0) < 245)) {
                IF_SETTRANS((IF_GETTRANS(int0) + 10), int0);
            };
        };
    } else if ((IF_GETY(int0) > 30)) {
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(1, int0);
    } else {
        IF_SETPOSITION(0, (IF_GETY(int0) + 1), 2, 0, int0);
        if ((IF_GETTRANS(int0) < 245)) {
            IF_SETTRANS((IF_GETTRANS(int0) + 10), int0);
        };
    };
    return;
}