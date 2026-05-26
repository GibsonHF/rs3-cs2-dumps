//
function script2585(int0: number, int1: number, int2: number, int3: number): void {
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
                script2584(int7, 2424925, 2424934, 2424935, 2424936, 2424945, 2424946, 2424947, 2424956, 2424957, 2424958, 2424967, 2424968, 2424969, 2424978, 2424979, 4, 1);
                script2591(int7, script2543(int6, varplayer_8333), -1);
            };
        };
    };
    return;
}