//
function script11994(int0: cs2enum, int1: component): int {
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    var int3 = 0;
    var int4 = -1 as struct;
    var int5 = 0;
    if (((varbitplayer_45115 != 1) && (varbitplayer_45116 != 1))) {
        return int2;
    };
    while ((int3 < int2)) {
        int4 = script9101(enum_getvalue(0, 73, int0, int3));
        if ((varbitplayer_45116 != 1)) {
            if ((script12007(int4) == 1)) {
                int5 = (int5 + 1);
            };
        } else if ((script12248(int3) == 1)) {
            int5 = (int5 + 1);
        } else if ((script7083(int4) == 1)) {
            int5 = (int5 + 1);
            script12246(int3);
        };
        int3 = (int3 + 1);
    };
    return int5;
}