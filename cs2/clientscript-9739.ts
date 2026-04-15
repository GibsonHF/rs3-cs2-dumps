//
function script9739(int0: int, int1: component): void {
    var int2 = enum_getvalue(0, 9, 8824 as cs2enum, (int0 - 1));
    if (((int2 != comp(-1, 65535)) && (IF_GETHIDE(int2) == false))) {
        return;
    };
    var int3 = enum_getvalue(9, 9, 8819 as cs2enum, int1);
    var int4 = enum_getvalue(9, 9, 8820 as cs2enum, int1);
    if (((int3 == comp(-1, 65535)) || (int4 == comp(-1, 65535)))) {
        return;
    };
    var int5 = 0;
    if ((int0 < 23)) {
        int5 = TESTBIT(varplayer_1084, (int0 + 9));
    } else if ((int0 < 55)) {
        int5 = TESTBIT(varplayer_4482, (int0 - 23));
    } else {
        int5 = TESTBIT(varplayer_4483, (int0 - 55));
    };
    if ((int5 == 1)) {
        IF_SETHIDE(false, int3);
        IF_SETHIDE(true, int4);
    } else {
        IF_SETHIDE(true, int3);
        IF_SETHIDE(false, int4);
    };
    return;
}