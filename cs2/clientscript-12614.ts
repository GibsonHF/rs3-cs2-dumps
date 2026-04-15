//
function script12614(int0: int): void {
    if (((int0 < 0) || (int0 > 46))) {
        return;
    };
    var int1 = script10405(int0);
    if ((int1 == -1 as struct)) {
        return;
    };
    if ((struct_getparam(int1, 5770) == false)) {
        return;
    };
    var int2 = struct_getparam(int1, 3503);
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    var int3 = -1;
    var int4 = -1;
    var int5 = -1;
    var int6 = 0;
    var int7 = 0;
    if ((script12612(int1) == true)) {
        int3 = script8314(int0);
        if ((int3 == int0)) {
            [int4, int5] = script8718(int0);
            if (((int4 != -1) || (int5 != -1))) {
                int6 = 1;
                int7 = 1;
            };
        } else if ((int3 != -1)) {
            int6 = 1;
            int7 = 1;
        } else {
            int7 = 1;
        };
    };
    if ((int6 == 1)) {
        script8323(int0, 0);
    };
    if ((int7 == 1)) {
        script8361(int0);
    };
    if ((IF_GETTRANS(int2) == 0)) {
        IF_SETTRANS(1, int2);
    } else {
        IF_SETTRANS(0, int2);
    };
    script8705(int0);
    script8411(int0, 0);
    if ((int6 == 1)) {
        script8311(int0);
    };
    return;
}