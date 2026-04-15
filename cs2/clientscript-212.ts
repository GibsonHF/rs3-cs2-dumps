//
function script212(int0: stat, int1: int, int2: unknown_int, int3: int): int {
    var int4 = enum_getvalue(17, 26, 14197 as cs2enum, int0);
    if ((int4 == -1 as cs2enum)) {
        return 0;
    };
    var int5 = script495(int0);
    var int6 = enum_getvalue(0, 0, int4, int1);
    var int7 = script480(int0);
    var int8 = 0;
    if ((varbitplayer_18201 == 1)) {
        int8 = 2;
    } else if ((varbitplayer_41402 != 0)) {
        int8 = 1;
    };
    var int9 = MAX(1, POW(2, (script491(int0, int8) / int7)));
    var int10 = (int7 - MODULO(script491(int0, int8), int7));
    var int11 = 0;
    var int12 = 0;
    if ((int8 != 2)) {
        int6 = SCALE((100 + 10), 100, int6);
    };
    int12 = (int6 * int9);
    var int13 = (int5 / int12);
    if ((int2 == 2)) {
        return int12;
    };
    if ((int2 == 3)) {
        return int10;
    };
    if ((int2 == 5)) {
        return int9;
    };
    if ((int2 == 1)) {
        while ((int5 > int12)) {
            int13 = (int5 / int12);
            if ((int13 >= int10)) {
                int11 = (int11 + int10);
                int5 = (int5 - (int12 * int10));
                int12 = (int12 * 2);
                int10 = int7;
            } else {
                int11 = (int11 + int13);
                int5 = (int5 - (int12 * int13));
            };
        };
        return int11;
    };
    if ((int2 == 4)) {
        int5 = 0;
        while ((int3 > 0)) {
            if ((int3 >= int10)) {
                int5 = (int5 + (int12 * int10));
                var int3 = (int3 - int10);
                int12 = (int12 * 2);
                int10 = int7;
            } else {
                int5 = (int5 + (int12 * int3));
                int3 = 0;
            };
        };
        return int5;
    };
    return 0;
}