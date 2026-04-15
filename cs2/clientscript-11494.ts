//
function script11494(int0: cs2enum, int1: int): unknown_int {
    var int2 = 0;
    switch (int1) {
        case 31: {
            if ((script12278() == 1)) {
                int2 = TELEMETRY_GET_GROUP_INDEX(3);
                if (((int2 > -1) && (TELEMETRY_GET_ROW_INDEX(int2, 1) > -1))) {
                    return 1;
                };
            };
            break;
        }
        case 32: {
            if ((script12278() == 1)) {
                int2 = TELEMETRY_GET_GROUP_INDEX(2);
                if (((int2 > -1) && (TELEMETRY_GET_ROW_INDEX(int2, 1) > -1))) {
                    return 1;
                };
            };
            break;
        }
        default: {
            int2 = TELEMETRY_GET_GROUP_INDEX(1);
            if (((int2 > -1) && (TELEMETRY_GET_ROW_INDEX(int2, int1) > -1))) {
                return 1;
            };
            break;
        }
    };
    return 0;
}