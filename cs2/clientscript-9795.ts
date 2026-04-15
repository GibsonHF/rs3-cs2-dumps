//
function script9795(int0: struct, int1: int): graphic {
    var int2 = -1 as graphic;
    if ((struct_getparam(int0, 3915) > 0)) {
        switch (int1) {
            case 1: {
                int2 = struct_getparam(int0, 3910);
                break;
            }
            case 2: {
                int2 = struct_getparam(int0, 3911);
                break;
            }
            case 3: {
                int2 = struct_getparam(int0, 3912);
                break;
            }
            case 4: {
                int2 = struct_getparam(int0, 3913);
                break;
            }
            case 5: {
                int2 = struct_getparam(int0, 3914);
                break;
            }
        };
        if ((int2 == -1 as graphic)) {
            int2 = struct_getparam(int0, 3910);
        };
        return int2;
    };
    return struct_getparam(int0, 3909);
}