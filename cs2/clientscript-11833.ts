//
function script11833(int0: int, int1: component, int2: component, int3: int, int4: int, int5: int, int6: unknown_int, int7: unknown_int, int8: unknown_int): void {
    varbitclient_29534 = 1;
    varbitclient_29535 = int3;
    varbitclient_29536 = int0;
    varclient_5077 = int1;
    var int9 = IF_GETNEXTSUBID(int2);
    var int10 = 0;
    if ((CC_FIND(int1, int0) == 1)) {
        while ((int10 < int9)) {
            if ((CC_FIND[1](int2, int10) == 1)) {
                if (((int3 == 1) && (cc_getparam[1](5326) == cc_getparam(5326)))) {
                    CC_SETPOSITION[1](int4, CC_GETY[1](), 0, 0);
                    CC_SENDTOFRONT[1]();
                    CC_SETTRANS[1](125);
                } else if (((int3 == 2) && (cc_getparam[1](5325) == cc_getparam(5325)))) {
                    if ((cc_getparam[1](5638) == 1)) {
                        CC_SETPOSITION[1](CC_GETX[1](), ((int5 + (27 / 2)) - (8 / 2)), 0, 0);
                    } else {
                        CC_SETPOSITION[1](CC_GETX[1](), int5, 0, 0);
                    };
                    CC_SENDTOFRONT[1]();
                    CC_SETTRANS[1](125);
                };
            };
            int10 = (int10 + 1);
        };
    };
    if ((int3 == 2)) {
        script1653(script10075());
    };
    return;
}