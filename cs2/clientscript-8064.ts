//
function script8064(int0: int): [component, int] {
    var int1 = script10405(int0);
    var int2 = struct_getparam(int1, 3503);
    var int3 = comp(-1, 65535);
    var int4 = -1;
    if (((int1 == -1 as struct) || (int2 == comp(-1, 65535)))) {
        return [comp(-1, 65535), -1];
    };
    if ((script12612(int1) == false)) {
        if ((IF_GETHIDE(int2) == false)) {
            int3 = comp(-1, 65535);
        };
    } else {
        [int3, int4] = script8067(int0, int1, int2);
        if ((int3 == comp(-1, 65535))) {
            int2 = struct_getparam(int1, 3514);
            if ((int2 != comp(-1, 65535))) {
                [int3, int4] = script8068(int0, int1, int2);
            };
        } else if ((int3 == int2)) {
            int3 = comp(-1, 65535);
        };
    };
    return [int3, int4];
}