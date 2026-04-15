//
function script18327(int0: obj): unknown_int {
    if (((int0 == -1 as obj) || (item_getparam(int0, 3384) == 0))) {
        return 0;
    };
    var int1 = 0;
    var int2 = -1 as obj;
    var int3 = -1 as obj;
    while ((int1 <= 7)) {
        switch (int1) {
            case 0: {
                int2 = int0;
                break;
            }
            case 1: {
                int2 = item_getparam(int0, 4688);
                break;
            }
            case 2: {
                int2 = item_getparam(int0, 4689);
                break;
            }
            case 3: {
                int2 = item_getparam(int0, 4690);
                break;
            }
            case 4: {
                int2 = item_getparam(int0, 5439);
                break;
            }
            case 5: {
                int2 = item_getparam(int0, 6894);
                break;
            }
            case 6: {
                int2 = item_getparam(int0, 8739);
                break;
            }
            case 7: {
                int2 = item_getparam(int0, 8840);
                break;
            }
            default: {
                return 0;
            }
        };
        if ((int2 != -1 as obj)) {
            if ((INV_TOTAL(94 as inv, int2) > 0)) {
                return 1;
            };
            int3 = item_getparam(int2, 3382);
            if (((int3 != -1 as obj) && (INV_TOTAL(94 as inv, int3) > 0))) {
                return 1;
            };
            int3 = item_getparam(int2, 5551);
            if (((int3 != -1 as obj) && (INV_TOTAL(94 as inv, int3) > 0))) {
                return 1;
            };
            int3 = item_getparam(int2, 7226);
            if (((int3 != -1 as obj) && (INV_TOTAL(94 as inv, int3) > 0))) {
                return 1;
            };
        };
        int1 = (int1 + 1);
    };
    return 0;
}