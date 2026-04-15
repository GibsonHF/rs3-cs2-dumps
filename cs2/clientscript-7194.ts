//
function script7194(int0: unknown_int, int1: int, int2: int, int3: int, int4: int, int5: int, int6: int, int7: int, int8: int): void {
    if (((KEYHELD_SHIFT() == true) || (CAM2_GETCONTROLMODE() != 1))) {
        return;
    };
    var int9 = MAX(MIN(varclient_1272, 50), 1);
    switch (int0) {
        case 1: {
            var [int1, int2, int3] = script7193(int9, int1, int2, int3, (int4 - (16284 / 4)), 0);
            break;
        }
        case 2: {
            [int1, int2, int3] = script7193(int9, int1, int2, int3, (int4 + (16284 / 4)), 0);
            break;
        }
        case 3: {
            int2 = (int2 + int9);
            break;
        }
        case 4: {
            int2 = (int2 - int9);
            break;
        }
        case 5: {
            [int1, int2, int3] = script7193(int9, int1, int2, int3, int4, int5);
            break;
        }
        case 6: {
            [int1, int2, int3] = script7193((0 - int9), int1, int2, int3, int4, int5);
            break;
        }
        default: {
            return;
        }
    };
    script7192(int1, int2, int3, int4, int5, int6, int7, int8);
    return;
}