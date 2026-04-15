//
function script4017(int0: int, int1: unknown_int): void {
    if ((int0 < 14)) {
        IF_SETSCROLLSIZE(0, 0, comp(1500, 24));
        IF_SETSCROLLPOS(0, 0, comp(1500, 24));
        CC_DELETEALL(comp(1500, 325));
    } else {
        IF_SETSCROLLSIZE(0, (int0 * 20), comp(1500, 24));
        if ((int1 == 1)) {
            IF_SETSCROLLPOS(0, 0, comp(1500, 24));
        } else {
            IF_SETSCROLLPOS(0, ((int0 * 20) - 180), comp(1500, 24));
        };
        script7791(comp(1500, 325), comp(1500, 24));
    };
    return;
}