//
function script17524(int0: dbrow, int1: int, int2: unknown_int): int {
    if ((int0 == -1 as dbrow)) {
        return 0;
    };
    var int3 = -1 as obj;
    var int4 = 0;
    var int5 = 0;
    [int3, int4] = script17504(int0, int1, -1);
    if ((int2 == 1)) {
        int5 = (int5 + (script17831() / 10));
        if (((varplayer_12314 > 0) && (varbitplayer_58531 > 0))) {
            int5 = (int5 + varbitplayer_58531);
        };
        if ((script18411(5) == 1)) {
            int5 = (int5 + 50);
        };
        if (((script19657() == true) && (script4148() == false))) {
            int5 = (int5 + 20);
        };
    };
    return SCALE(enum_getvalue(33, 0, 16990 as cs2enum, int3), 100, (100 + int5));
}