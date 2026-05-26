//
function script19296(int0: number, int1: number): void {
    var int2 = IF_GETWIDTH(84541472);
    if ((int2 == int0)) {
        IF_SETONTIMER(callback(), 84541542);
        return;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int3, int4, int5] = script2413(2023680);
    int3 = MAX(1, (int3 - SCALE(int3, 100, (100 - int1))));
    int4 = MAX(1, (int4 - SCALE(int4, 100, (100 - int1))));
    int5 = MAX(1, (int5 - SCALE(int5, 100, (100 - int1))));
    IF_SETCOLOUR(script693(int3, int4, int5), 84541536);
    IF_SETCOLOUR(script693(int3, int4, int5), 84541537);
    var int6 = 1;
    if ((int2 < int0)) {
        if ((int2 < (int0 - 10))) {
            int6 = 5;
        };
        IF_SETSIZE((int2 + int6), 17, 0, 0, 84541472);
    } else if ((int2 > int0)) {
        if ((int2 > (int0 + 10))) {
            int6 = 5;
        };
        IF_SETSIZE((int2 - int6), 17, 0, 0, 84541472);
    };
    return;
}