//
function script17546(int0: number, int1: number, int2: number): void {
    var int3 = script18321(int0, 76742678);
    var int4 = script18321(int0, 76742677);
    var int5 = script18321(int0, 76742661);
    var int6 = script18321(int0, 76742670);
    var int7 = script18321(int0, 76742668);
    var int8 = IF_GETWIDTH(int7);
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    [int9, int10, int11] = script2413(IF_GETCOLOUR(int5));
    int9 = MAX(1, (int9 - SCALE(int9, 100, (100 - int2))));
    int10 = MAX(1, (int10 - SCALE(int10, 100, (100 - int2))));
    int11 = MAX(1, (int11 - SCALE(int11, 100, (100 - int2))));
    IF_SETCOLOUR(script693(int9, int10, int11), int3);
    IF_SETCOLOUR(script693(int9, int10, int11), int4);
    var int12 = 1;
    if ((int8 < int1)) {
        if ((int8 < (int1 - 10))) {
            int12 = 5;
        };
        IF_SETSIZE((int8 + int12), 19, 0, 0, int7);
    } else if ((int8 > int1)) {
        if ((int8 > (int1 + 10))) {
            int12 = 5;
        };
        IF_SETSIZE((int8 - int12), 19, 0, 0, int7);
    } else {
        IF_SETONTIMER(callback(), int3);
    };
    return;
}