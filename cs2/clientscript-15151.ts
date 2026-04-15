//
function script15151(int0: unknown_int, int1: boolean): void {
    if ((int0 == 0)) {
        var int1 = script12585(IF_GETHIDE(comp(653, 12)));
    };
    IF_SETHIDE(int1, comp(653, 12));
    if ((int1 == true)) {
        IF_SETOP(1, "Open info panel", comp(653, 69));
    } else {
        IF_SETOP(1, "Close info panel", comp(653, 69));
        script15158(-1);
    };
    return;
}