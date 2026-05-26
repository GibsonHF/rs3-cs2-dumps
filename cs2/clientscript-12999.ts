//
function script12999(int0: number, int1: number): void {
    var int2 = IF_GETWIDTH(119209985);
    var int3 = (30 + SCALE(195, 100, (100 - int1)));
    var int4 = (225 - SCALE(195, 100, (100 - int1)));
    var int5 = 1;
    if ((int2 < int0)) {
        if ((int2 < (int0 - 10))) {
            int5 = 5;
        };
        IF_SETSIZE((int2 + int5), 19, 0, 0, 119209985);
        IF_SETSIZE((int2 + int5), 19, 0, 0, 119209996);
        IF_SETCOLOUR(script693(int3, int4, 0), 119209992);
        IF_SETCOLOUR(script693(int3, int4, 0), 119209991);
    } else if ((int2 > int0)) {
        if ((int2 > (int0 + 10))) {
            int5 = 5;
        };
        IF_SETSIZE((int2 - int5), 19, 0, 0, 119209985);
        IF_SETSIZE((int2 - int5), 19, 0, 0, 119209996);
        IF_SETCOLOUR(script693(int3, int4, 0), 119209992);
        IF_SETCOLOUR(script693(int3, int4, 0), 119209991);
    } else {
        IF_SETONTIMER(callback(), 119209992);
    };
    return;
}