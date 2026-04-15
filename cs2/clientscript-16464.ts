//
function script16464(int0: component, int1: int, int2: int, int3: int, int4: int, int5: obj, int6: int, string0: string): int {
    var int7 = 26 as fontmetrics;
    var int8 = 29 as fontmetrics;
    var int9 = 34;
    var int10 = 30;
    var int11 = 5;
    var int12 = ((int1 + int10) + int11);
    var int13 = enum_getvalue(25, 0, 8549 as cs2enum, int8);
    var int14 = enum_getvalue(25, 0, 8549 as cs2enum, int7);
    var int15 = enum_getvalue(25, 0, 8584 as cs2enum, int7);
    if ((int5 != -1 as obj)) {
        if (((int5 == -1 as obj) || (STRING_LENGTH(OC_NAME(int5)) == 0))) {
            script4512(int0, int9, int9, (int1 - 4), (int2 - 4), script16465());
        } else {
            script10410(int0, comp(-1, 65535), 28575 as struct, int1, (int2 - 2), (int10 + 2), (int10 + 2), 0, false, "");
            script6197(int0, int10, int10, (int1 + 2), int2, int5, -1);
        };
        if ((STRINGWIDTH(string0, int8) >= int3)) {
            int8 = 26 as fontmetrics;
        };
        script152(int0, int3, int13, int12, int2, int8, string0, int6);
        CC_SETTEXTALIGN(0, 1, 0);
        CC_SETMAXLINES(1);
        script152(int0, int3, int14, int12, ((int2 + int13) + 2), int7, `Lvl ${inttostring(int4, 10)}`, int6);
        CC_SETTEXTALIGN(0, 1, int15);
        CC_SETMAXLINES(1);
        var int2 = (int2 + int10);
    };
    return int2;
}