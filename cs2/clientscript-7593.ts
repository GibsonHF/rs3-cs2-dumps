//
function script7593(int0: int, int1: fontmetrics, int2: int, string0: string): int {
    if ((int1 == -1 as fontmetrics)) {
        var int1 = 26 as fontmetrics;
    };
    if ((enum_getvalue(25, 1, 16359 as cs2enum, int1) == false)) {
        return script15891(string0, int0, int1, 0);
    };
    var int3 = 1;
    var int4 = PARAHEIGHT(string0, int0, int1);
    var int5 = enum_getvalue(25, 0, 8549 as cs2enum, int1);
    if ((int5 < 0)) {
        return 0;
    };
    if ((int2 <= 0)) {
        var int2 = enum_getvalue(25, 0, 8584 as cs2enum, int1);
        if ((int2 <= 0)) {
            int2 = int5;
            int3 = 0;
        };
    };
    var int6 = script11432(int1);
    if ((int2 < int6)) {
        int6 = (int2 * 2);
    } else {
        int6 = (int2 + int6);
    };
    if ((int4 > 1)) {
        int4 = ((int2 * (int4 - 1)) + int5);
        if ((int3 == 1)) {
            return MAX(int4, int6);
        };
        return int4;
    };
    if ((int4 == 1)) {
        return int5;
    };
    return 0;
}