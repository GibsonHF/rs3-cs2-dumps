//
function script15544(int0: number, int1: number): void {
    if (((int0 == -1) || (int1 == -1))) {
        return;
    };
    IF_SETSCROLLPOS(0, 0, int1);
    IF_SETSCROLLSIZE(0, 0, int1);
    IF_SETHIDE(1, int0);
    return;
}