//
function script17546(int0: component, int1: int, int2: int): void {
    var int3 = script18321(int0, comp(1171, 27));
    var int4 = script18321(int0, comp(1171, 26));
    var int5 = script18321(int0, comp(1171, 5));
    var int6 = script18321(int0, comp(1171, 14));
    var int7 = script18321(int0, comp(1171, 12));
    var int8 = script18321(int0, comp(1171, 33));
    var int9 = IF_GETWIDTH(int7);
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    [int10, int11, int12] = script2413(IF_GETCOLOUR(int5));
    int10 = MAX(1, (int10 - SCALE(int10, 100, (100 - int2))));
    int11 = MAX(1, (int11 - SCALE(int11, 100, (100 - int2))));
    int12 = MAX(1, (int12 - SCALE(int12, 100, (100 - int2))));
    var int13 = 1;
    if ((int9 < int1)) {
        if ((int9 < (int1 - 10))) {
            int13 = 5;
        };
        IF_SETSIZE((int9 + int13), 19, 0, 0, int7);
        IF_SETSIZE((int9 + int13), 19, 0, 0, int8);
        IF_SETCOLOUR(script693(int10, int11, int12), int3);
        IF_SETCOLOUR(script693(int10, int11, int12), int4);
    } else if ((int9 > int1)) {
        if ((int9 > (int1 + 10))) {
            int13 = 5;
        };
        IF_SETSIZE((int9 - int13), 19, 0, 0, int7);
        IF_SETSIZE((int9 - int13), 19, 0, 0, int8);
        IF_SETCOLOUR(script693(int10, int11, int12), int3);
        IF_SETCOLOUR(script693(int10, int11, int12), int4);
    } else {
        IF_SETONTIMER(callback(), int3);
    };
    return;
}