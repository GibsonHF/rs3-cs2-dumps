//
function script11317(int0: component): void {
    var int1 = -1 as cs2enum;
    var int2 = 0;
    var int3 = 0;
    if ((int0 == comp(1507, 1))) {
        int1 = 9990 as cs2enum;
    } else {
        int1 = 9991 as cs2enum;
    };
    int2 = ENUM_GETOUTPUTCOUNT(int1);
    var int4 = MIN((IF_GETTRANS(enum_getvalue(0, 9, int1, 0)) + 20), 255);
    while ((int3 < int2)) {
        IF_SETTRANS(int4, enum_getvalue(0, 9, int1, int3));
        int3 = (int3 + 1);
    };
    if ((int4 >= 255)) {
        IF_SETONTIMER(callback(), int0);
        IF_SETHIDE(1, int0);
        return;
    };
    return;
}