//
function script9468(): void {
    var int0 = ENUM_GETOUTPUTCOUNT(14100 as cs2enum);
    var int1 = 0;
    var int2 = -1 as cs2enum;
    var int3 = IF_GETWIDTH(comp(419, 3));
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as obj;
    while ((int1 < int0)) {
        int2 = enum_getvalue(0, 26, 14100 as cs2enum, int1);
        script6200(comp(419, 4), int3, 13, 0, int5, 29 as fontmetrics, enum_getvalue(26, 36, 14101 as cs2enum, int2), 0);
        int5 = (int5 + 15);
        int7 = ENUM_GETOUTPUTCOUNT(int2);
        while ((int6 < int7)) {
            if (((int4 + 40) > int3)) {
                int4 = 0;
                int5 = (int5 + 36);
            };
            int8 = enum_getvalue(0, 33, int2, int6);
            script6197(comp(419, 5), 36, 32, int4, int5, int8, -1);
            CC_SETOP(1, "Select");
            CC_SETONOP(callback(script9470, int8, -2147483643));
            CC_SETONMOUSEOVER(callback(script9605, int8));
            CC_SETONMOUSELEAVE(callback(script9607));
            int4 = (int4 + 40);
            int6 = (int6 + 1);
        };
        int4 = 0;
        int5 = (int5 + 36);
        int6 = 0;
        int1 = (int1 + 1);
    };
    return;
}