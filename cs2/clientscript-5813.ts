//
function script5813(int0: cs2enum): [int, int] {
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(int0);
    var int3 = 0;
    var int4 = -1 as struct;
    while ((int1 < int2)) {
        int4 = enum_getvalue(0, 73, int0, int1);
        if ((script13280(int4) == -2)) {
            int3 = (int3 + 1);
        };
        int1 = (int1 + 1);
    };
    return [int3, int2];
}