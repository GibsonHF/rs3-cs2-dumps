//
function script20315(int0: number, int1: number): void {
    var int2 = dbrow_getfield(int0, 1368096, 0);
    if ((int2 == -1 as achievement)) {
        CC_DELETEALL(89194513);
        IF_SETTRANS(255, 89194510);
        IF_SETONTIMER(callback(), 89194509);
        return;
    };
    var int3 = script20307(int0, 0);
    var string0 = script20131(int0, int2);
    var int4 = 0;
    var int5 = 0;
    var int6 = IF_GETWIDTH(89194513);
    if ((IF_FIND(89194513) == 1)) {
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
        IF_SETTRANS(int8, 89194510);
        IF_SETTRANS(int8, 89194511);
        IF_SETTRANS(int8, 89194512);
        script4161(89194513, int8);
    } else if ((int7 >= 300)) {
        int7 = (int7 - 300);
        int8 = MIN(255, SCALE(255, 50, int7));
        IF_SETTRANS(int8, 89194510);
        IF_SETTRANS(int8, 89194511);
        IF_SETTRANS(int8, 89194512);
        script4161(89194513, int8);
        if ((int8 >= 255)) {
            IF_SETONTIMER(callback(), 89194509);
        };
    };
    return;
}