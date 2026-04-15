//
function script5853(int0: component, int1: int): void {
    if ((int1 < 90)) {
        var int1 = (int1 + 1);
        IF_SETPOSITION(0, int1, 2, 2, int0);
        IF_SETTRANS((IF_GETTRANS(int0) + 2), int0);
        IF_SETONTIMER(callback(script5853, int0, int1), int0);
    } else {
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(1, int0);
    };
    return;
}