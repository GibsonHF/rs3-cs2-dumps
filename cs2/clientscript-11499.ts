//
function script11499(int0: int, int1: int): string {
    var string0 = "-";
    if ((int1 == 0)) {
        return string0;
    };
    var int2 = enum_getvalue(0, 17, 681 as cs2enum, int0);
    if ((int2 == -1 as stat)) {
        return string0;
    };
    var int3 = 0;
    var int4 = 0;
    var int5 = 2;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = script12289(int2);
    if ((script4036(int0) == 1)) {
        [int5, int3, int4] = script4037(int0);
        if ((int5 == 1)) {
            int6 = enum_getvalue(0, 0, int9, int3);
        } else {
            int6 = int3;
        };
        int7 = MAX(0, (int6 - STAT_VISIBLE_XP_ACTUAL(int2)));
    };
    var int10 = 0;
    var int11 = 0;
    if ((int7 == 0)) {
        if ((varbitplayer_19007 == 1)) {
            int10 = enum_getvalue(17, 0, 10868 as cs2enum, int2);
        } else {
            int10 = enum_getvalue(17, 0, 10865 as cs2enum, int2);
        };
        int11 = script12294(int2);
        if ((int11 < int10)) {
            int6 = enum_getvalue(0, 0, int9, (int11 + 1));
            int7 = MAX(0, (int6 - STAT_VISIBLE_XP_ACTUAL(int2)));
            if ((int7 == 0)) {
                return string0;
            };
        } else {
            return string0;
        };
    };
    int8 = (((int7 / int1) * 60) + SCALE(MODULO(int7, int1), int1, 60));
    if ((int8 > 0)) {
        return script12587(script11025(int8));
    };
    return "<lt>1m";
}