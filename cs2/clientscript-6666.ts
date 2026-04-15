//
function script6666(): unknown_int {
    var int0 = 0;
    var int1 = ENUM_GETOUTPUTCOUNT(15289 as cs2enum);
    var int2 = -1 as obj;
    while ((int0 < int1)) {
        int2 = enum_getvalue(0, 33, 15289 as cs2enum, int0);
        if ((script6646(int2) > 0)) {
            return 1;
        };
        int0 = (int0 + 1);
    };
    return 0;
}