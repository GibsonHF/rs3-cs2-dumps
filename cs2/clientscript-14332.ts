//
function script14332(int0: number, int1: number, int2: number): void {
    var int3 = -1;
    switch (int2) {
        case 92209163: {
            script14334(19805, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 1), int0);
            break;
        }
        case 92209166: {
            if (((INV_TOTAL(93 as inv, 28084 as obj) > 0) || (INV_TOTAL(94 as inv, 28084 as obj) > 0))) {
                int3 = 28084;
            } else {
                int3 = 19808;
            };
            script14334(int3, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 94, 2), int0);
            break;
        }
        case 92209170: {
            script14334(19809, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 1), int0);
            break;
        }
        case 92209173: {
            script14334(19819, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 1), int0);
            break;
        }
        case 92209176: {
            script14334(19814, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 1), int0);
            break;
        }
        case 92209179: {
            script14334(19824, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 1), int0);
            break;
        }
        case 92209182: {
            script14334(28085, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 1), int0);
            break;
        }
    };
    return;
}