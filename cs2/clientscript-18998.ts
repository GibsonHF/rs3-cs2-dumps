//
function script18998(): void {
    var int0 = IF_GETNEXTSUBID(comp(1870, 18));
    var int1 = -1;
    var int2 = 0;
    var int3 = 0;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    if ((CC_FIND[1](comp(1870, 18), 12) == 1)) {
        while ((++int1 < int0)) {
            if (((int1 != 12) && (CC_FIND(comp(1870, 18), int1) == 1))) {
                int2 = (ABS((CC_GETX() - (CC_GETX[1]() - (CC_GETWIDTH[1]() - CC_GETWIDTH())))) / CC_GETWIDTH());
                int3 = (ABS((CC_GETY() - (CC_GETY[1]() + (CC_GETHEIGHT[1]() - CC_GETHEIGHT())))) / CC_GETHEIGHT());
                int4 = MIN(int2, int3);
                int5 = MAX(int2, int3);
                switch (int4) {
                    case 0: {
                        switch (int5) {
                            case 0: {
                                int6 = 0;
                                break;
                            }
                            case 1: {
                                int6 = 10;
                                break;
                            }
                            case 2: {
                                int6 = 20;
                                break;
                            }
                            case 3: {
                                int6 = 30;
                                break;
                            }
                        };
                        break;
                    }
                    case 1: {
                        switch (int5) {
                            case 1: {
                                int6 = 14;
                                break;
                            }
                            case 2: {
                                int6 = 22;
                                break;
                            }
                            case 3: {
                                int6 = 36;
                                break;
                            }
                        };
                        break;
                    }
                    case 2: {
                        switch (int5) {
                            case 2: {
                                int6 = 28;
                                break;
                            }
                            case 3: {
                                int6 = 36;
                                break;
                            }
                        };
                        break;
                    }
                    case 3: {
                        int6 = 42;
                        break;
                    }
                };
                cc_setparam(5837, 1);
                cc_setparam(5938, 0);
                cc_setparam(5939, 150);
                cc_setparam(5940, 600);
                cc_setparam(5403, int6);
                CC_SETONTIMER(callback(script12631, -2147483645, -2147483643));
            };
        };
    };
    return;
}