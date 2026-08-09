//
function script16033(int0: number): number {
    var int1 = struct_getparam(int0, 7425);
    var int2 = -1;
    var int3 = ENUM_GETOUTPUTCOUNT(int1);
    int2 = (int2 + 1);
    while ((int2 < int3)) {
        if ((script16034(int2) == 0)) {
            return int2;
        };
    };
    return -1;
}