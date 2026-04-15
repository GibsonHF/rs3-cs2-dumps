//
function script14332(int0: unknown_int, int1: component, int2: component): void {
    var int3 = -1 as obj;
    switch (int2) {
        case 92209163: {
            script14334(19805 as obj, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 1), int0);
            break;
        }
        case 92209166: {
            if (((INV_TOTAL(93 as inv, 28084 as obj) > 0) || (INV_TOTAL(94 as inv, 28084 as obj) > 0))) {
                int3 = 28084 as obj;
            } else {
                int3 = 19808 as obj;
            };
            script14334(int3, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 94, 2), int0);
            break;
        }
        case 92209170: {
            script14334(19809 as obj, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 1), int0);
            break;
        }
        case 92209173: {
            script14334(19819 as obj, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 1), int0);
            break;
        }
        case 92209176: {
            script14334(19814 as obj, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 1), int0);
            break;
        }
        case 92209179: {
            script14334(19824 as obj, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 1), int0);
            break;
        }
        case 92209182: {
            script14334(28085 as obj, int1, int2);
            IF_SETONINVTRANSMIT(callback(script14333, int1, int2, 93, 1), int0);
            break;
        }
    };
    return;
}