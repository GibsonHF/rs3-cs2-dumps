//
function script2728(): unknown_int {
    if ((script2761() > 100)) {
        return 0;
    };
    var int0 = ENUM_GETOUTPUTCOUNT(681 as cs2enum);
    while ((int0 > 0)) {
        if ((STAT_BASE(enum_getvalue(0, 17, 681 as cs2enum, int0)) > 20)) {
            return 0;
        };
        int0 = (int0 - 1);
    };
    return 1;
}