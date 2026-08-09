//
function script15653(int0: number, int1: number): void {
    if ((int0 != 0)) {
        var int0 = (int0 - 1);
        IF_SETONTIMER(callback(script15653, int0, int1), int1);
        return;
    };
    IF_SETONTIMER(callback(), int1);
    IF_SETMODELANIM(-1 as seq, int1);
    IF_SETHIDE(true, int1);
    return;
}