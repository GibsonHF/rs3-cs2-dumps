//
function script14298(int0: int, int1: component, int2: component): void {
    var int3 = IF_GETWIDTH(int1);
    if ((int0 < 15)) {
        int3 = SCALE((15 - int0), 15, int3);
        IF_SETCOLOUR(3368703, int2);
        IF_SETPOSITION(0, 0, 2, 0, int2);
    } else if ((int0 > 15)) {
        int3 = (int3 - SCALE((30 - int0), 15, int3));
        IF_SETCOLOUR(14754595, int2);
        IF_SETPOSITION(0, 0, 0, 0, int2);
    } else {
        int3 = 0;
        IF_SETCOLOUR(6710886, int2);
    };
    IF_SETSIZE(int3, 0, 0, 1, int2);
    return;
}