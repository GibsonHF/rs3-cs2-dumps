//
function script14757(int0: component, int1: int, int2: int, int3: int, int4: int, string0: string): int {
    var int5 = script7593(string0, int3, 29 as fontmetrics, enum_getvalue(25, 0, 8549 as cs2enum, 29 as fontmetrics));
    script152(int0, int3, int5, int1, int2, 29 as fontmetrics, string0, int4);
    CC_SETTEXTALIGN(0, 0, enum_getvalue(25, 0, 8549 as cs2enum, 29 as fontmetrics));
    var int2 = (int2 + (int5 + (2 * 2)));
    return int2;
}