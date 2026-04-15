//
function script16457(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: obj, int7: obj, int8: obj, int9: obj, string0: string): int {
    var int10 = -1;
    var [int10, int2] = script14749(int0, int1, int2, CC_GETID(), 0);
    var int11 = int2;
    var int12 = ((((4 + 4) + (35 + 2)) + (2 * 4)) + int1);
    var int13 = ((((int3 - (2 * 4)) - 4) - (35 + 2)) - (2 * 4));
    var int14 = 16777215;
    if ((STAT_BASE(script2179(15)) < int5)) {
        int14 = script10495(6);
    };
    if ((int6 != -1 as obj)) {
        if ((int4 > 1)) {
            int2 = script14760(int0, int12, int2, int13, "", int4, int6, string0, int7, OC_NAME(int7), int8, OC_NAME(int8), int9, OC_NAME(int9), int14);
        } else {
            int2 = script14759(int0, int12, int2, int13, int6, string0, int14);
        };
    } else {
        int2 = script14758(int0, int12, int2, int13, string0, int14);
    };
    var int15 = (int2 - int11);
    int12 = ((4 + 4) + int1);
    var int16 = (((35 + 2) + 2) + enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics));
    int15 = MAX(int15, int16);
    int2 = (int11 + ((((int15 - (35 + 2)) - enum_getvalue(25, 0, 8549 as cs2enum, 26 as fontmetrics)) - (2 * 2)) / 2));
    script14761(int0, int12, int2, 35, 15, int5, int14);
    int2 = script14750(int0, int10, (int11 + int15), 0);
    return int2;
}