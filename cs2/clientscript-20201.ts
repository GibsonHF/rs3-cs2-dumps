//
function script20201(int0: number): void {
    var int1 = script20130();
    if ((int1 == -1)) {
        return;
    };
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(9053);
    var int4 = comp(-1, 65535);
    var int5 = 0;
    while ((int2 < int3)) {
        int5 = enum_getvalue(0, 0, 9053 as cs2enum, int2);
        int4 = enum_getvalue(0, 9, 9080 as cs2enum, int5);
        if ((int4 != comp(-1, 65535))) {
            if ((int5 == int0)) {
                IF_SETHIDE(0, int4);
                IF_SETCOLOUR(16776960, int4);
            } else if ((int5 == varbitplayer_58391)) {
                IF_SETHIDE(0, int4);
                IF_SETCOLOUR(65535, int4);
            } else if ((script20133(int1, int5) == 1)) {
                IF_SETHIDE(0, int4);
                IF_SETCOLOUR(16777215, int4);
            } else {
                IF_SETHIDE(1, int4);
                IF_SETCOLOUR(16777215, int4);
            };
        };
        int2 = (int2 + 1);
    };
    IF_SETPARAM_INT(9341, int0, 92340225);
    return;
}