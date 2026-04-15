//
function script8067(int0: int, int1: struct, int2: component): [component, int] {
    var int3 = script8314(int0);
    var int4 = comp(-1, 65535);
    var int5 = -1;
    if ((int3 != -1)) {
        if ((int3 == int0)) {
            int4 = int2;
        } else {
            int4 = struct_getparam(script10405(int3), 3509);
            int5 = script8372(int4, int0);
            if ((script8375(int3, int5) < 0)) {
                int4 = struct_getparam(script10405(int3), 3510);
                int5 = 0;
            } else if ((script8376(int3, int5) > IF_GETWIDTH(int4))) {
                int4 = struct_getparam(script10405(int3), 3510);
                int5 = 1;
            } else {
                int5 = script8373(int5);
            };
        };
    };
    return [int4, int5];
}