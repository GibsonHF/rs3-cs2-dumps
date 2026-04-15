//
function script19296(int0: int, int1: int): void {
    var int2 = IF_GETWIDTH(comp(1290, 32));
    if ((int2 == int0)) {
        IF_SETONTIMER(callback(), comp(1290, 102));
        return;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    [int3, int4, int5] = script2413(2023680);
    int3 = MAX(1, (int3 - SCALE(int3, 100, (100 - int1))));
    int4 = MAX(1, (int4 - SCALE(int4, 100, (100 - int1))));
    int5 = MAX(1, (int5 - SCALE(int5, 100, (100 - int1))));
    IF_SETCOLOUR(script693(int3, int4, int5), comp(1290, 96));
    IF_SETCOLOUR(script693(int3, int4, int5), comp(1290, 97));
    var int6 = 1;
    if ((int2 < int0)) {
        if ((int2 < (int0 - 10))) {
            int6 = 5;
        };
        IF_SETSIZE((int2 + int6), 17, 0, 0, comp(1290, 32));
    } else if ((int2 > int0)) {
        if ((int2 > (int0 + 10))) {
            int6 = 5;
        };
        IF_SETSIZE((int2 - int6), 17, 0, 0, comp(1290, 32));
    };
    return;
}