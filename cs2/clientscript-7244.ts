//
function script7244(int0: obj): int {
    var int1 = 0;
    var int2 = 0;
    var int3 = 0;
    var int4 = -1 as stat;
    if ((item_getparam(int0, 2827) == 1)) {
        int1 = item_getparam(int0, 3);
        int4 = 6 as stat;
    } else if ((item_getparam(int0, 2825) == 1)) {
        int1 = item_getparam(int0, 3267);
        int4 = 0 as stat;
    } else if ((item_getparam(int0, 2826) == 1)) {
        int1 = item_getparam(int0, 4);
        int4 = 4 as stat;
    } else if ((item_getparam(int0, 8898) == 1)) {
        int1 = item_getparam(int0, 8879);
        int4 = 28 as stat;
    };
    if ((int4 != -1 as stat)) {
        int2 = enum_getvalue(0, 0, 7338 as cs2enum, int1);
        int1 = MAX(0, enum_getvalue(0, 0, 7339 as cs2enum, int2));
        int3 = MAX(0, MIN(10, SCALE((STAT(int4) - int2), 100, 50)));
        int3 = enum_getvalue(0, 0, 7339 as cs2enum, (int3 + int2));
        int3 = MAX(0, (int3 - enum_getvalue(0, 0, 7339 as cs2enum, MIN(85, int2))));
    };
    return int1;
}