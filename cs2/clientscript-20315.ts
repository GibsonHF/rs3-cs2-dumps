//
function script20315(int0: dbrow, int1: unknown_int): void {
    var int2 = dbrow_getfield(int0, 1368096, 0);
    if ((int2 == -1 as achievement)) {
        CC_DELETEALL(comp(1361, 17));
        IF_SETTRANS(255, comp(1361, 14));
        IF_SETONTIMER(callback(), comp(1361, 13));
        return;
    };
    var int3 = script20307(int0, 0);
    var string0 = script20131(int0, int2);
    var int4 = 0;
    var int5 = 0;
    var int6 = IF_GETWIDTH(comp(1361, 17));
    if ((IF_FIND(comp(1361, 17)) == 1)) {
        [int4, int5] = script19613(0, int4, int5, int6, "Task progressed:");
        [int4, int5] = script19615(0, int4, (int5 - 4), int6, string0);
    };
    stack(int3);
    stack(89194512);
    IF_SETGRAPHIC();
    IF_SETSIZE(0, MAX(40, (int5 + 8)), 1, 0, 89194509);
    var int7 = (CLIENTCLOCK() - int1);
    var int8 = 0;
    if ((int7 <= 50)) {
        int8 = MAX(0, (255 - SCALE(255, 50, int7)));
        IF_SETTRANS(int8, comp(1361, 14));
        IF_SETTRANS(int8, comp(1361, 15));
        IF_SETTRANS(int8, comp(1361, 16));
        script4161(comp(1361, 17), int8);
    } else if ((int7 >= 300)) {
        int7 = (int7 - 300);
        int8 = MIN(255, SCALE(255, 50, int7));
        IF_SETTRANS(int8, comp(1361, 14));
        IF_SETTRANS(int8, comp(1361, 15));
        IF_SETTRANS(int8, comp(1361, 16));
        script4161(comp(1361, 17), int8);
        if ((int8 >= 255)) {
            IF_SETONTIMER(callback(), comp(1361, 13));
        };
    };
    return;
}