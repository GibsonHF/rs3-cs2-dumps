//
function script15544(int0: component, int1: component): void {
    if (((int0 == comp(-1, 65535)) || (int1 == comp(-1, 65535)))) {
        return;
    };
    IF_SETSCROLLPOS(0, 0, int1);
    IF_SETSCROLLSIZE(0, 0, int1);
    IF_SETHIDE(true, int0);
    return;
}