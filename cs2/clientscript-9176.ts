//
function script9176(int0: cs2enum, int1: int, int2: int): int {
    var int3 = 0;
    var int4 = -1 as struct;
    var int5 = ENUM_GETOUTPUTCOUNT(int0);
    while ((int3 < int5)) {
        int4 = enum_getvalue(0, 73, int0, (1 + int3));
        if ((script9178(struct_getparam(int4, 1268)) == int1)) {
            script9173(int3, int2);
            var int2 = (int2 + 1);
        };
        int3 = (int3 + 1);
    };
    return int2;
}