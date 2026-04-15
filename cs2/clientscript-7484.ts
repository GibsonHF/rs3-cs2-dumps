//
function script7484(int0: int, int1: unknown_int): [component, component, component, int] {
    var int2 = -1;
    switch (int1) {
        case 0: {
            if ((script6431() == true)) {
                int2 = 540;
            } else {
                int2 = 539;
            };
            break;
        }
        case 1: {
            int2 = 541;
            break;
        }
        case 2: {
            int2 = 48357;
            break;
        }
        default: {
            return [comp(-1, 65535), comp(-1, 65535), comp(-1, 65535), 0];
        }
    };
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    switch (int0) {
        case 1: {
            int3 = struct_getparam(int2, 8241);
            int4 = struct_getparam(int2, 8247);
            int5 = struct_getparam(int2, 8253);
            break;
        }
        case 2: {
            int3 = struct_getparam(int2, 8242);
            int4 = struct_getparam(int2, 8248);
            int5 = struct_getparam(int2, 8254);
            break;
        }
        case 3: {
            int3 = struct_getparam(int2, 8243);
            int4 = struct_getparam(int2, 8249);
            int5 = struct_getparam(int2, 8255);
            break;
        }
        case 4: {
            int3 = struct_getparam(int2, 8244);
            int4 = struct_getparam(int2, 8250);
            int5 = struct_getparam(int2, 8256);
            break;
        }
        case 5: {
            int3 = struct_getparam(int2, 8245);
            int4 = struct_getparam(int2, 8251);
            int5 = struct_getparam(int2, 8257);
            break;
        }
        case 6: {
            int3 = struct_getparam(int2, 8246);
            int4 = struct_getparam(int2, 8252);
            int5 = struct_getparam(int2, 8258);
            break;
        }
    };
    if (((((int3 == comp(-1, 65535)) || (int4 == comp(-1, 65535))) || (int5 == comp(-1, 65535))) || (int0 == 0))) {
        return [comp(-1, 65535), comp(-1, 65535), comp(-1, 65535), 0];
    };
    return [int3, int4, int5, MODULO((int0 + 1), 6)];
}