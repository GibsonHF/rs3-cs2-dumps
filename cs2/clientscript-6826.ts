//
function script6826(int0: int, int1: component): void {
    var int2 = (CLIENTCLOCK() - int0);
    var int3 = 0;
    if ((int2 < 100)) {
        int3 = (15 - SCALE(int2, 100, 20));
        IF_SETPOSITION(0, int3, 1, 1, int1);
    } else {
        if ((int2 < 200)) {
            return;
        };
        if ((int2 < 300)) {
            int3 = (-5 + SCALE((int2 - 200), 100, 20));
            IF_SETPOSITION(0, int3, 1, 1, int1);
        };
    };
    if ((int2 >= 300)) {
        script6828();
    };
    return;
}