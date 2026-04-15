//
function script9095(int0: struct, int1: unknown_int): int {
    var int2 = struct_getparam(int0, 4850);
    if ((int1 == 1)) {
        if ((struct_getparam(int0, 6613) != -1)) {
            return struct_getparam(int0, 6613);
        };
        return script12719(int0, int2);
    };
    return int2;
}