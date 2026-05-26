//
function script13507(int0: number, int1: number, int2: number, int3: number): [number, number] {
    var int4 = script10405(int0);
    var int5 = struct_getparam(int4, 3503);
    var int6 = comp(-1, 65535);
    var int7 = -1;
    if (((int4 == -1) || (int5 == comp(-1, 65535)))) {
        return [comp(-1, 65535), -1];
    };
    if (((script8314(int1) > -1) && (IF_GETHIDE(int2) == 0))) {
        return [int2, int3];
    };
    if ((script12612(int4) == 0)) {
        if ((IF_GETHIDE(int5) == 0)) {
            int6 = comp(-1, 65535);
        };
    } else {
        [int6, int7] = script8067(int0, int4, int5);
        if ((int6 == comp(-1, 65535))) {
            int5 = struct_getparam(int4, 3514);
            if ((int5 != comp(-1, 65535))) {
                [int6, int7] = script8068(int0, int4, int5);
            };
        } else if ((int6 == int5)) {
            int6 = comp(-1, 65535);
        };
    };
    return [int6, int7];
}