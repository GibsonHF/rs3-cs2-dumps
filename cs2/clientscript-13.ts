//
function script13(int0: struct): int {
    if ((int0 == -1 as struct)) {
        return -1;
    };
    var int1 = struct_getparam(int0, 4842);
    var int2 = -1 as struct;
    var int3 = -1;
    var int4 = 0;
    var int5 = -1;
    if ((int1 != -1 as cs2enum)) {
        while ((++int5 <= ENUM_GETOUTPUTCOUNT(int1))) {
            int2 = enum_getvalue(0, 73, int1, int5);
            if ((int2 != -1 as struct)) {
                int4 = (int4 + 1);
            } else {
                int3 = MAX(int3, int4);
                int4 = 0;
            };
        };
        int3 = MAX(int3, int4);
    };
    return int3;
}