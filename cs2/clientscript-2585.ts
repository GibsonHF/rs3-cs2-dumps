//
function script2585(int0: component, int1: int, int2: unknown_int, int3: unknown_int): void {
    if ((int2 != 1)) {
        return;
    };
    var int4 = 2531 as cs2enum;
    if ((varplayer_8331 == 1482 as dbrow)) {
        int4 = 2530 as cs2enum;
    };
    var int5 = 0;
    var int6 = -1 as obj;
    var int7 = -1 as dbrow;
    if ((CC_FIND(int0, int1) == 1)) {
        int6 = cc_getparam(7811);
        if ((int6 != -1 as obj)) {
            int7 = enum_getvalue(33, 74, int4, int6);
            if ((int7 == -1 as dbrow)) {
                script2591(-1 as dbrow, int6, -1);
            } else if ((int3 != 4)) {
                script2584(int7, comp(37, 93), comp(37, 102), comp(37, 103), comp(37, 104), comp(37, 113), comp(37, 114), comp(37, 115), comp(37, 124), comp(37, 125), comp(37, 126), comp(37, 135), comp(37, 136), comp(37, 137), comp(37, 146), comp(37, 147), 4, 1);
                script2591(int7, script2543(int6, varplayer_8333), -1);
            };
        };
    };
    return;
}