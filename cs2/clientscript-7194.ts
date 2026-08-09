//
function script7194(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number): void {
    if (((KEYHELD_SHIFT() == true) || (CAM2_GETCONTROLMODE() != 1))) {
        return;
    };
    var int9 = MAX(MIN(varclient_1272, 50), 1);
    switch (int0) {
        case 1: {
            [int1, int2, int3] = script7193(int9, int1, int2, int3, (int4 - (16284 / 4)), 0);
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