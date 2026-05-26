//
function script14761(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number): number {
    var int7 = 26 as fontmetrics;
    if ((script6431() == 1)) {
        int7 = 28 as fontmetrics;
    };
    var string0 = `Lvl ${inttostring(int5, 10)}`;
    if ((int5 < 0)) {
        string0 = "Lvl ?";
    };
    var int8 = STRINGWIDTH(string0, int7);
    script10410(int0, -1, 28575, int1, int2, (int3 + 2), (int3 + 2), 0, 0, "");
    script7924(int0, IF_GETNEXTSUBID(int0), int3, int3, (int1 + 1), (int2 + 1), enum_getvalue(0, 23, 8548 as cs2enum, int4), 0, 0, 0, 0);
    script152(int0, int8, enum_getvalue(25, 0, 8549 as cs2enum, int7), (int1 - ((int8 - int3) / 2)), (((int2 + int3) + 2) + 2), int7, string0, int6);
    var int2 = (int2 + (((int3 + 2) + 1) + enum_getvalue(25, 0, 8549 as cs2enum, int7)));
    return int2;
}