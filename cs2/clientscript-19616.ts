//
function script19616(int0: int, int1: int, int2: int, int3: int, int4: int, int5: cs2enum): [int, int] {
    var int6 = 0;
    var int7 = ENUM_GETOUTPUTCOUNT(int5);
    var string0 = "";
    while ((int6 < int7)) {
        string0 = enum_getvalue(0, 36, int5, int6);
        var [int1, int2] = script19617(int0, int1, int2, int3, int4, string0);
        int6 = (int6 + 1);
    };
    return [int1, int2];
}