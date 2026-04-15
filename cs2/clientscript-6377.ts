//
function script6377(): unknown_int {
    var int0 = CC_GETLAYER();
    var int1 = comp(-1, 65535);
    while ((int0 != comp(-1, 65535))) {
        if ((script6365(int0) == 1)) {
            return 0;
        };
        int1 = int0;
        int0 = IF_GETLAYER(int0);
    };
    if ((int1 == comp(-1, 65535))) {
        return 0;
    };
    if ((script6378(int1) == 1)) {
        return 1;
    };
    if ((script6366() == 0)) {
        return 0;
    };
    var int2 = comp(-1, 65535);
    var int3 = 0;
    while ((int3 < 13)) {
        int0 = script6362(int3);
        if ((int0 == comp(-1, 65535))) {
            return 0;
        };
        while ((int0 != comp(-1, 65535))) {
            int2 = int0;
            int0 = IF_GETLAYER(int0);
        };
        if (((int2 == int1) || (script6379(int2) == int1))) {
            return 1;
        };
        int3 = (int3 + 1);
    };
    return 0;
}