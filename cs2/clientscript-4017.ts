//
function script4017(int0: number, int1: number): void {
    if ((int0 < 14)) {
        IF_SETSCROLLSIZE(0, 0, 98304024);
        IF_SETSCROLLPOS(0, 0, 98304024);
        CC_DELETEALL(98304325);
    } else {
        IF_SETSCROLLSIZE(0, (int0 * 20), 98304024);
        if ((int1 == 1)) {
            IF_SETSCROLLPOS(0, 0, 98304024);
        } else {
            IF_SETSCROLLPOS(0, ((int0 * 20) - 180), 98304024);
        };
        script7791(98304325, 98304024);
    };
    return;
}