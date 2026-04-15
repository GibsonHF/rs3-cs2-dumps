//
function script17726(int0: struct): int {
    if ((int0 == -1 as struct)) {
        return 0;
    };
    var int1 = script7241(INV_GETOBJ(94 as inv, 3));
    var int2 = script7241(INV_GETOBJ(94 as inv, 5));
    var int3 = 0;
    switch (struct_getparam(int0, 2806)) {
        case 1:
        case 2: {
            int3 = 1;
            if (((struct_getparam(int0, 2799) == 0) && (int1 == 0))) {
                int3 = 0;
            };
            break;
        }
        case 3: {
            int3 = 2;
            break;
        }
        case 4: {
            int3 = 3;
            break;
        }
        case 29: {
            int3 = 11;
            break;
        }
        case 6:
        case 5: {
            if ((int1 != 0)) {
                int3 = int1;
            };
            break;
        }
    };
    var int4 = 0;
    if ((int1 == int3)) {
        int4 = varplayer_3531;
        if ((int2 == int3)) {
            int4 = (int4 + SCALE(varplayer_3532, 100, 50));
        };
    };
    return int4;
}