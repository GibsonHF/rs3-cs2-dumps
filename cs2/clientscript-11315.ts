//
function script11315(int0: component): void {
    var int1 = -1 as cs2enum;
    var int2 = -1;
    var int3 = -1;
    var int4 = 0;
    var int5 = 0;
    if ((int0 == comp(1507, 1))) {
        int1 = 9990 as cs2enum;
    } else {
        int1 = 9991 as cs2enum;
    };
    int4 = ENUM_GETOUTPUTCOUNT(int1);
    var int6 = MAX((IF_GETTRANS(enum_getvalue(0, 9, int1, 0)) - 20), 0);
    while ((int5 < int4)) {
        IF_SETTRANS(int6, enum_getvalue(0, 9, int1, int5));
        int5 = (int5 + 1);
    };
    if ((int6 <= 0)) {
        IF_SETONTIMER(callback(), int0);
        return;
    };
    return;
}