//
function script16896(int0: component, int1: cs2enum, int2: graphic): void {
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(int1);
    var int5 = 0;
    var int6 = IF_GETWIDTH(int0);
    var string0 = "";
    while ((int3 < int4)) {
        string0 = enum_getvalue(0, 36, int1, int3);
        int5 = script16897(int0, int3, int5, int6, string0, int2);
        int3 = (int3 + 1);
    };
    return;
}