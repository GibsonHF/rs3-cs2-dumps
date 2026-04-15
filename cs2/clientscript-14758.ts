//
function script14758(int0: component, int1: int, int2: int, int3: int, int4: int, string0: string): int {
    var int5 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int5 = 28 as fontmetrics;
    };
    var int6 = script7593(string0, int3, int5, enum_getvalue(25, 0, 8549 as cs2enum, int5));
    script152(int0, int3, int6, int1, int2, int5, string0, int4);
    CC_SETTEXTALIGN(0, 0, enum_getvalue(25, 0, 8549 as cs2enum, int5));
    var int2 = (int2 + (int6 + (2 * 2)));
    return int2;
}