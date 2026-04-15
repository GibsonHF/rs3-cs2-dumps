//
function script13303(int0: unknown_int): int {
    var int1 = 1;
    while ((int1 < 5)) {
        switch (int0) {
            case 0: {
                if ((INV_TOTAL(93 as inv, enum_getvalue(0, 33, 7332 as cs2enum, int1)) == 1)) {
                    return int1;
                };
                break;
            }
            case 1: {
                if ((INV_TOTAL(94 as inv, enum_getvalue(0, 33, 7332 as cs2enum, int1)) == 1)) {
                    return int1;
                };
                break;
            }
            case 2: {
                if (((INV_TOTAL(94 as inv, enum_getvalue(0, 33, 7332 as cs2enum, int1)) == 1) || (INV_TOTAL(93 as inv, enum_getvalue(0, 33, 7332 as cs2enum, int1)) == 1))) {
                    return int1;
                };
                break;
            }
            case 3: {
                if ((script259(enum_getvalue(0, 33, 7332 as cs2enum, int1)) == 1)) {
                    return int1;
                };
                break;
            }
        };
        int1 = (int1 + 1);
    };
    return 0;
}