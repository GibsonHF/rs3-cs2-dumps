//
function script14761(int0: component, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int): int {
    var int7 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int7 = 28 as fontmetrics;
    };
    var string0 = `Lvl ${inttostring(int5, 10)}`;
    if ((int5 < 0)) {
        string0 = "Lvl ?";
    };
    var int8 = STRINGWIDTH(string0, int7);
    script10410(int0, comp(-1, 65535), 28575 as struct, int1, int2, (int3 + 2), (int3 + 2), 0, false, "");
    script7924(int0, IF_GETNEXTSUBID(int0), int3, int3, (int1 + 1), (int2 + 1), enum_getvalue(0, 23, 8548 as cs2enum, int4), false, false, false, 0);
    script152(int0, int8, enum_getvalue(25, 0, 8549 as cs2enum, int7), (int1 - ((int8 - int3) / 2)), (((int2 + int3) + 2) + 2), int7, string0, int6);
    var int2 = (int2 + (((int3 + 2) + 1) + enum_getvalue(25, 0, 8549 as cs2enum, int7)));
    return int2;
}