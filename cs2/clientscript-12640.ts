//
function script12640(): void {
    var int0 = -1;
    var int1 = -1;
    var int2 = -1;
    switch (cc_getparam(5837)) {
        case 0: {
            CC_SETTRANS(SCALE((enum_getvalue(0, 0, 9054 as cs2enum, MODULO((script12722(cc_getparam(5940), cc_getparam(5403)) + 270), 360)) + 100), 200, 255));
            break;
        }
        case 1: {
            int1 = MIN(255, cc_getparam(5938));
            int2 = MIN(255, cc_getparam(5939));
            if (((cc_getparam(5839) > 0) && (CC_GETTRANS() == cc_getparam(3861)))) {
                cc_setparam(5839, (cc_getparam(5839) - 1));
                return;
            };
            if (((int1 > -1) && (int2 > int1))) {
                CC_SETTRANS((int1 + SCALE((enum_getvalue(0, 0, 9054 as cs2enum, MODULO((script12722(cc_getparam(5940), cc_getparam(5403)) + 270), 360)) + 100), 200, (int2 - int1))));
                cc_setparam(5839, cc_getparam(5402));
            };
            break;
        }
        case 2: {
            if ((cc_getparam(6407) != -1)) {
                int0 = MODULO(((100 + CLIENTCLOCK()) - (cc_getparam(6407) * 25)), 100);
                if (((int0 / 25) == 0)) {
                    CC_SENDTOFRONT();
                } else if (((int0 / 25) == 1)) {
                    int0 = 25;
                } else {
                    int0 = 0;
                };
                CC_SETTRANS(SCALE((100 - SCALE(int0, 25, 100)), 100, 255));
            };
            break;
        }
        case 3: {
            if ((cc_getparam(5839) > 0)) {
                cc_setparam(5839, (cc_getparam(5839) - 1));
            } else {
                int0 = MIN(255, cc_getparam(5941));
                if (((int0 > -1) && (int0 != CC_GETTRANS()))) {
                    if ((int0 < CC_GETTRANS())) {
                        CC_SETTRANS(MAX((CC_GETTRANS() - ABS(cc_getparam(5838))), int0));
                    } else {
                        CC_SETTRANS(MIN((CC_GETTRANS() + ABS(cc_getparam(5838))), int0));
                    };
                };
            };
            break;
        }
        case 4: {
            int0 = MIN(255, cc_getparam(5941));
            if ((int0 > -1)) {
                if ((int0 != CC_GETTRANS())) {
                    if ((int0 < CC_GETTRANS())) {
                        CC_SETTRANS(MAX((CC_GETTRANS() - ABS(cc_getparam(5838))), int0));
                    } else {
                        CC_SETTRANS(MIN((CC_GETTRANS() + ABS(cc_getparam(5838))), int0));
                    };
                } else if ((cc_getparam(5839) > 0)) {
                    cc_setparam(5839, (cc_getparam(5839) - 1));
                } else {
                    int0 = MIN(255, cc_getparam(5937));
                    if ((int0 > -1)) {
                        if ((int0 != CC_GETTRANS())) {
                            cc_setparam(5941, int0);
                        } else {
                            cc_setparam(5941, -1);
                        };
                    } else {
                        cc_setparam(5937, CC_GETTRANS());
                        cc_setparam(5941, -1);
                    };
                };
            } else if ((cc_getparam(5937) != CC_GETTRANS())) {
                cc_setparam(5937, MIN(255, cc_getparam(5937)));
                cc_setparam(5941, CC_GETTRANS());
            };
            break;
        }
    };
    return;
}