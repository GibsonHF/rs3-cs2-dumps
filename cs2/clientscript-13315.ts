//
function script13315(int0: component, int1: component): void {
    var int2 = -1;
    var int3 = -1;
    var int4 = -1;
    var int5 = 131;
    var int6 = 0;
    if ((IF_FIND(int0) == 1)) {
        int5 = script12422(int5, 1000, cc_getparam(5942));
        int2 = cc_getparam(6408);
        int3 = cc_getparam(6409);
        int6 = cc_getparam(6754);
        int4 = script12377((int2 + script12377((int3 - int2), (0 - int5), int5)), 0, 65536);
        cc_setparam(6408, int4);
        if ((IF_FIND[1](int1) == 1)) {
            if ((int6 == 0)) {
                CC_SETSIZE[1](SCALE(int4, 65536, CC_GETWIDTH()), 0, 0, 1);
            } else {
                CC_SETSIZE[1](0, SCALE(int4, 65536, CC_GETHEIGHT()), 1, 0);
            };
        };
    };
    return;
}