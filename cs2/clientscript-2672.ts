//
function script2672(int0: cs2enum): unknown_int {
    var int1 = ENUM_GETOUTPUTCOUNT(int0);
    var int2 = -1 as obj;
    var int3 = -1;
    while ((++int3 < int1)) {
        int2 = enum_getvalue(0, 33, int0, int3);
        if ((script4065(int2) == 1)) {
            return 1;
        };
    };
    return 0;
}