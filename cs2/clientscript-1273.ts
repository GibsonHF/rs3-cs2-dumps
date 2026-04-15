//
function script1273(int0: component): void {
    if ((int0 == comp(-1, 65535))) {
        return;
    };
    var int1 = -1 as graphic;
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    if ((IF_FIND(int0) == 1)) {
        int2 = cc_getparam(6376);
        int3 = cc_getparam(6377);
        if (((int2 == comp(-1, 65535)) || (int3 == comp(-1, 65535)))) {
            return;
        };
        int1 = script11657(cc_getparam(6378));
    };
    var int4 = -1;
    while ((CC_FIND(int2, ++int4) == 1)) {
        CC_SETGRAPHIC(int1);
    };
    int4 = -1;
    while ((CC_FIND(int3, ++int4) == 1)) {
        CC_SETGRAPHIC(int1);
    };
    return;
}