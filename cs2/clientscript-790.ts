//
function script790(): [stat, stat, stat, stat, stat, stat] {
    var int0 = -1 as stat;
    var int1 = -1 as stat;
    var int2 = -1 as stat;
    var int3 = -1 as stat;
    var int4 = -1 as stat;
    var int5 = -1 as stat;
    var int6 = 1;
    var int7 = ENUM_GETOUTPUTCOUNT(681 as cs2enum);
    var int8 = -1 as stat;
    while ((int6 <= int7)) {
        int8 = enum_getvalue(0, 17, 681 as cs2enum, int6);
        if ((int8 == 26 as stat)) {
            if ((script12654() == 1)) {
                [int0, int1, int2, int3, int4, int5] = script12669(int0, int1, int2, int3, int4, int5, int8);
            };
        } else if ((int8 == -1 as stat)) {
        } else {
            [int0, int1, int2, int3, int4, int5] = script12668(int0, int1, int2, int3, int4, int5, int8);
        };
        int6 = (int6 + 1);
    };
    return [int0, int1, int2, int3, int4, int5];
}