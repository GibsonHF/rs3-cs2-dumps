//
function script10873(int0: obj, int1: int, int2: int, int3: unknown_int): int {
    switch (int0) {
        case 33741:
        case 33742:
        case 33743:
        case 33744: {
            return (int2 * varclient_4680);
        }
        case 56645:
        case 56646:
        case 56647:
        case 56648: {
            return ((int2 * varclient_4680) + SCALE((int2 * varclient_4680), 100, 10));
        }
        case 34529: {
            return script11154(0, 0);
        }
        case 34531: {
            if ((int3 == 1)) {
                return script11154(1, 0);
            };
            return script11153(0);
        }
        case 56650: {
            return script11154(0, 1);
        }
        case 56651: {
            if ((int3 == 1)) {
                return script11154(1, 1);
            };
            return script11153(1);
        }
        case 41001:
        case 41002:
        case 41003:
        case 41004:
        case 41005:
        case 41006: {
            return script13556();
        }
        case 40997: {
            return script13557();
        }
        case 40998: {
            return script13558();
        }
        case 40999: {
            if ((int3 == 1)) {
                return script13559();
            };
            return script13560();
        }
        case 41000: {
            return script13561();
        }
        case 53065:
        case 53055:
        case 53050:
        case 53043:
        case 53060: {
            return script17422(int0, int1);
        }
    };
    switch (OC_CATEGORY(int0)) {
        case 4717: {
            return script14692(int0);
        }
        case 4718: {
            if ((int3 == 1)) {
                return script14692(int0);
            };
            return int1;
        }
    };
    if (((script10744(int0) == 1) && (INV_TOTAL(93 as inv, 32821 as obj) > 0))) {
        var int1 = SCALE(12, 10, int1);
        return (int2 * int1);
    };
    if ((script7166(int0) == 1)) {
        return ((int2 * int1) / 10000);
    };
    return (int2 * int1);
}