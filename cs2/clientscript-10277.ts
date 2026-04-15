//
function script10277(int0: struct, int1: int): int {
    if ((int0 == -1 as struct)) {
        return 50;
    };
    var int2 = struct_getparam(int0, 4501);
    var int3 = struct_getparam(int0, 4510);
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if (((int1 == 0) && (int3 != -1 as cs2enum))) {
        int5 = ENUM_GETOUTPUTCOUNT(int3);
        while ((int4 < int5)) {
            if ((enum_getvalue(0, 0, int3, int4) == 105)) {
                int6 = (script10272((int4 + 1)) + 1);
                int4 = int5;
            };
            int4 = (int4 + 1);
        };
    };
    if ((int6 > 1)) {
        return int6;
    };
    return int2;
}