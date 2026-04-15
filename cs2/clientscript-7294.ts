//
function script7294(int0: int): int {
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    [int2, int3, int4] = script7295(int0);
    var int5 = int2;
    var int6 = -1 as obj;
    while ((int5 <= int3)) {
        int6 = INV_GETOBJ(677 as inv, int5);
        if ((((int6 != -1 as obj) && (enum_hasoutput(33, 2173 as cs2enum, int6) == 1)) && (TESTBIT(varplayer_3404, int5) == 1))) {
            if ((int1 != -1)) {
                return -1;
            };
            int1 = int5;
        };
        int5 = (int5 + 1);
    };
    return int1;
}