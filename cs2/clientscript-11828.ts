//
function script11828(int0: int, int1: component, int2: component, int3: unknown_int, int4: int): void {
    var int5 = IF_GETNEXTSUBID(int2);
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    var int9 = comp(1588, 4);
    if ((int3 == 2)) {
        int9 = comp(1681, 7);
    };
    if (((CC_FIND(int1, int0) == 1) && (cc_getparam(5326) != -1))) {
        IF_SETSIZE(CC_GETWIDTH(), IF_GETHEIGHT(int1), 0, 0, int9);
        IF_SETPOSITION(CC_GETX(), IF_GETY(int1), 0, 0, int9);
        IF_SETHIDE(false, int9);
        IF_SENDTOFRONT(int9);
        if ((CC_FIND[1](int1, varbitclient_29536) == 1)) {
            int7 = cc_getparam[1](5326);
            if ((int7 > cc_getparam(5326))) {
                int8 = int7;
                while ((int8 >= cc_getparam(5326))) {
                    int6 = (int5 - 1);
                    while ((int6 >= 0)) {
                        if (((CC_FIND[1](int2, int6) == 1) && (cc_getparam[1](5326) == int8))) {
                            if ((int8 == int7)) {
                                CC_SETPARAM_INT[1](5326, 99);
                            } else {
                                CC_SETPOSITION[1]((CC_GETX[1]() + int4), CC_GETY[1](), 0, 0);
                                CC_SETPARAM_INT[1](5326, (cc_getparam[1](5326) + 1));
                            };
                        };
                        int6 = (int6 - 1);
                    };
                    int8 = (int8 - 1);
                };
            } else if ((int7 < cc_getparam(5326))) {
                int8 = int7;
                while ((int8 <= cc_getparam(5326))) {
                    int6 = 0;
                    while ((int6 < int5)) {
                        if (((CC_FIND[1](int2, int6) == 1) && (cc_getparam[1](5326) == int8))) {
                            if ((int8 == int7)) {
                                CC_SETPARAM_INT[1](5326, 99);
                            } else {
                                CC_SETPOSITION[1]((CC_GETX[1]() - int4), CC_GETY[1](), 0, 0);
                                CC_SETPARAM_INT[1](5326, (cc_getparam[1](5326) - 1));
                            };
                        };
                        int6 = (int6 + 1);
                    };
                    int8 = (int8 + 1);
                };
            };
            if ((CC_FIND[1](int1, varbitclient_29536) == 1)) {
                CC_SETPARAM_INT[1](5326, cc_getparam(5326));
            };
            int6 = 0;
            while ((int6 < int5)) {
                if ((CC_FIND[1](int2, int6) == 1)) {
                    if ((cc_getparam[1](5326) == 99)) {
                        CC_SETPARAM_INT[1](5326, cc_getparam(5326));
                        CC_SETPOSITION[1](CC_GETX(), CC_GETY[1](), 0, 0);
                    } else if ((cc_getparam[1](5326) == (int7 + 100))) {
                        CC_SETPARAM_INT[1](5326, int7);
                    };
                };
                int6 = (int6 + 1);
            };
        };
    };
    return;
}