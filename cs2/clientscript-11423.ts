//
function script11423(int0: component, int1: struct): component {
    var int2 = script11425(int0);
    if ((int2 != comp(-1, 65535))) {
        return int2;
    };
    int2 = script11424(int0);
    var int3 = -1 as struct;
    if ((int2 == comp(-1, 65535))) {
        return comp(-1, 65535);
    };
    if ((IF_FIND(int2) == 1)) {
        int3 = cc_getparam(8106);
        if ((int3 == -1 as struct)) {
            return int2;
        };
        if ((script11296(int3) > script11296(int1))) {
            return comp(-1, 65535);
        };
        cc_setparam(8106, -1);
        script11427(int2, 1);
        return int2;
    };
    return comp(-1, 65535);
}