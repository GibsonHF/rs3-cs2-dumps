//
function script11834(int0: number, int1: number, int2: number, int3: number, int4: number): void {
    varbitclient_29535 = 0;
    varclient_5077 = comp(-1, 65535);
    if ((int4 == 1)) {
        IF_SETHIDE(1, 104071172);
    } else if ((int4 == 2)) {
        IF_SETHIDE(1, 110166023);
    };
    var int5 = IF_GETNEXTSUBID(int3);
    var int6 = 0;
    if ((int0 > -1)) {
        if ((CC_FIND(int2, int0) == 1)) {
            if (((int1 == 1) && (cc_getparam(5326) == -1))) {
                return;
            };
            if (((int1 == 2) && (cc_getparam(5325) == -1))) {
                return;
            };
            while ((int6 < int5)) {
                if ((CC_FIND[1](int3, int6) == 1)) {
                    if (((int1 == 1) && (cc_getparam[1](5326) == cc_getparam(5326)))) {
                        CC_SETPOSITION[1](CC_GETX(), CC_GETY[1](), 0, 0);
                        CC_SETTRANS[1](0);
                    } else if (((int1 == 2) && (cc_getparam[1](5325) == cc_getparam(5325)))) {
                        if ((cc_getparam[1](5638) == 1)) {
                            CC_SETPOSITION[1](CC_GETX[1](), ((CC_GETY() + (27 / 2)) - (8 / 2)), 0, 0);
                        } else {
                            CC_SETPOSITION[1](CC_GETX[1](), CC_GETY(), 0, 0);
                        };
                        CC_SETTRANS[1](0);
                    };
                };
                int6 = (int6 + 1);
            };
        };
    } else {
        varbitclient_29534 = 0;
    };
    return;
}