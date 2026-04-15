//
function script8068(int0: int, int1: struct, int2: component): [component, int] {
    var int3 = comp(-1, 65535);
    var int4 = -1;
    var int5 = -1;
    var int6 = -1;
    if ((script6354(int2) == 1)) {
        int3 = int2;
    } else {
        int5 = struct_getparam(int1, 3534);
        int6 = struct_getparam(int1, 3535);
        if (((int5 != -1) && (int6 != -1))) {
            if ((script8292(int5, -1) == 1)) {
                int3 = struct_getparam(21301 as struct, 3509);
                int4 = ((4 * int6) - 1);
            } else {
                [int3, int4] = script8069(int5);
            };
        };
    };
    return [int3, int4];
}