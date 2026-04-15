//
function script17452(int0: struct): int {
    var int1 = INV_GETOBJ(94 as inv, 3);
    var int2 = script7436(int1);
    if ((struct_getparam(int0, 2799) == 0)) {
        switch (struct_getparam(int0, 2806)) {
            case 29: {
                return (30 * int2);
            }
            case 1: {
                return (30 * int2);
            }
            case 4: {
                return (30 * int2);
            }
            case 3: {
                return (30 * int2);
            }
        };
    };
    return struct_getparam(int0, 2800);
}