//
function script6645(int0: obj): int {
    var int1 = 0;
    if ((enum_hasoutput(33, 15290 as cs2enum, int0) == 1)) {
        int1 = enum_getreverseindex(33, 0, 15290 as cs2enum, int0, 0);
        if (((int1 > -1) && (int1 < 19))) {
            return INV_GETNUM(866 as inv, int1);
        };
    };
    return 0;
}