//
function script2161(int0: unknown_int): int {
    var int1 = 0;
    if ((enum_hasoutput(33, 15320 as cs2enum, int0) == 1)) {
        int1 = enum_getreverseindex(33, 0, 15320 as cs2enum, int0, 0);
        if (((int1 > -1) && (int1 < 10))) {
            return INV_GETNUM(860 as inv, int1);
        };
    };
    return 0;
}