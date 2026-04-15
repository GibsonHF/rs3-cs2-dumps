//
function script8450(int0: struct): int {
    var int1 = -1 as cs2enum;
    var int2 = 0;
    var int3 = 1;
    if ((int0 != -1 as struct)) {
        int1 = struct_getparam(int0, 4842);
        while ((int2 < ENUM_GETOUTPUTCOUNT(int1))) {
            if ((enum_getvalue(0, 73, int1, int2) == -1 as struct)) {
                int3 = (int3 + 1);
            };
            int2 = (int2 + 1);
        };
    };
    return int3;
}