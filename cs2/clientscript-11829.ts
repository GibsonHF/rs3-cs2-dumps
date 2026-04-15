//
function script11829(int0: int, int1: component, int2: component, int3: unknown_int): void {
    var int4 = IF_GETNEXTSUBID(int2);
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = comp(1588, 4);
    if ((int3 == 2)) {
        int8 = comp(1681, 7);
    };
    if (((CC_FIND(int1, int0) == 1) && (cc_getparam(5325) != -1))) {
        IF_SETSIZE(IF_GETWIDTH(int1), CC_GETHEIGHT(), 0, 0, int8);
        IF_SETPOSITION(IF_GETX(int1), (CC_GETY() + 5), 0, 0, int8);
        IF_SETHIDE(false, int8);
        IF_SENDTOFRONT(int8);
        if ((CC_FIND[1](int1, varbitclient_29536) == 1)) {
            int6 = cc_getparam[1](5325);
            if ((int6 > cc_getparam(5325))) {
                int7 = int6;
                while ((int7 >= cc_getparam(5325))) {
                    int5 = (int4 - 1);
                    while ((int5 >= 0)) {
                        if (((CC_FIND[1](int2, int5) == 1) && (cc_getparam[1](5325) == int7))) {
                            if ((int7 == int6)) {
                                CC_SETPARAM_INT[1](5325, 99);
                            } else {
                                CC_SETPOSITION[1](CC_GETX[1](), (CC_GETY[1]() + 27), 0, 0);
                                CC_SETPARAM_INT[1](5325, (cc_getparam[1](5325) + 1));
                            };
                        };
                        int5 = (int5 - 1);
                    };
                    int7 = (int7 - 1);
                };
            } else if ((int6 < cc_getparam(5325))) {
                int7 = int6;
                while ((int7 <= cc_getparam(5325))) {
                    int5 = 0;
                    while ((int5 < int4)) {
                        if (((CC_FIND[1](int2, int5) == 1) && (cc_getparam[1](5325) == int7))) {
                            if ((int7 == int6)) {
                                CC_SETPARAM_INT[1](5325, 99);
                            } else {
                                CC_SETPOSITION[1](CC_GETX[1](), (CC_GETY[1]() - 27), 0, 0);
                                CC_SETPARAM_INT[1](5325, (cc_getparam[1](5325) - 1));
                            };
                        };
                        int5 = (int5 + 1);
                    };
                    int7 = (int7 + 1);
                };
            };
            if ((CC_FIND[1](int1, varbitclient_29536) == 1)) {
                CC_SETPARAM_INT[1](5325, cc_getparam(5325));
            };
            int5 = 0;
            while ((int5 < int4)) {
                if ((CC_FIND[1](int2, int5) == 1)) {
                    if ((cc_getparam[1](5325) == 99)) {
                        CC_SETPARAM_INT[1](5325, cc_getparam(5325));
                        CC_SETPOSITION[1](CC_GETX[1](), CC_GETY(), 0, 0);
                    } else if ((cc_getparam[1](5325) == ((int6 + 99) + 1))) {
                        CC_SETPARAM_INT[1](5325, int6);
                    };
                };
                int5 = (int5 + 1);
            };
        };
    };
    return;
}