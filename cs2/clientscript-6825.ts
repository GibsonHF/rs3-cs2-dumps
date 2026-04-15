//
function script6825(int0: int, int1: component): void {
    var int2 = (CLIENTCLOCK() - int0);
    var int3 = 0;
    if ((int2 < 75)) {
        int3 = (15 + SCALE(int2, 75, 10));
        IF_SETPOSITION(0, int3, 1, 1, int1);
    } else if ((int2 < 150)) {
        int3 = (25 - SCALE((int2 - 75), 75, 10));
        IF_SETPOSITION(0, int3, 1, 1, int1);
    } else if ((int2 < 225)) {
        int3 = (15 - SCALE((int2 - 150), 75, 10));
        IF_SETPOSITION(0, int3, 1, 1, int1);
    } else if ((int2 < 300)) {
        int3 = (5 + SCALE((int2 - 225), 75, 10));
        IF_SETPOSITION(0, int3, 1, 1, int1);
    };
    if ((int2 >= 300)) {
        script6828();
    };
    return;
}