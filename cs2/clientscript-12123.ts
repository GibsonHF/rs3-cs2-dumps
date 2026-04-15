//
function script12123(int0: component, int1: int, int2: dbrow, int3: component, int4: int, int5: int): void {
    var int6 = 0;
    var int7 = 0;
    if ((IF_FIND(comp(1708, 32)) == 1)) {
        if ((cc_getparam(5530) == int2)) {
            CC_SETONTIMER(callback(script12124, -2147483645, (CLIENTCLOCK() + 1), int3, int4, int5));
            return;
        };
        int6 = cc_getparam(5531);
        int7 = cc_getparam(5532);
        while ((int6 < int7)) {
            if ((CC_FIND[1](int3, int6) == 1)) {
                CC_SETHIDE[1](false);
            };
            int6 = (int6 + 1);
        };
    };
    var int8 = 0;
    var int9 = 0;
    var int10 = comp(-1, 65535);
    CC_DELETEALL(comp(1708, 32));
    if ((CC_FIND(int0, int1) == 1)) {
        var int2 = cc_getparam(5530);
        int8 = (CC_GETX() + 5);
        int9 = CC_GETY();
        int10 = CC_GETLAYER();
        while ((int10 != comp(1708, 2))) {
            int8 = (int8 + IF_GETX(int10));
            int9 = (int9 + IF_GETY(int10));
            int10 = IF_GETLAYER(int10);
        };
        script12122(comp(1708, 32), 0, comp(-1, 65535), 0, int8, int9, int2);
        if ((IF_FIND(comp(1708, 32)) == 1)) {
            CC_SETONTIMER(callback(script12124, -2147483645, (CLIENTCLOCK() + 1), int3, int4, int5));
            cc_setparam(5530, int2);
            cc_setparam(5531, int4);
            cc_setparam(5532, int5);
        };
    } else {
        return;
    };
    int6 = int4;
    while ((int6 < int5)) {
        if ((CC_FIND(int3, int6) == 1)) {
            CC_SETHIDE(true);
        };
        int6 = (int6 + 1);
    };
    return;
}