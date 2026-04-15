//
function script18330(int0: inv, int1: int, int2: int, int3: component, int4: int, int5: int, int6: int): [int, int, int, int] {
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as obj;
    var int10 = INV_SIZE(int0);
    if ((int10 != 0)) {
        while ((int8 < int10)) {
            int9 = INV_GETOBJ(int0, int8);
            int7 = INV_GETNUM(int0, int8);
            if ((int7 > 0)) {
                CC_CREATE(int3, 5, int4++);
                CC_SETSIZE(36, 32, 0, 0);
                CC_SETOBJECT_ALWAYSNUM(int9, int7);
            };
            int8 = (int8 + 1);
        };
        int8 = 0;
        int7 = (int4 - int5);
        while ((int5 < int4)) {
            if ((CC_FIND(int3, int5++) == 1)) {
                switch (MODULO(MIN(int7, 4), 4)) {
                    case 1: {
                        CC_SETPOSITION(0, (int6 + (35 * (int8 / 4))), 1, 0);
                        break;
                    }
                    case 2: {
                        switch (MODULO(int8, 4)) {
                            case 0: {
                                CC_SETPOSITION(((0 - 36) / 2), (int6 + (35 * (int8 / 4))), 1, 0);
                                break;
                            }
                            case 1: {
                                CC_SETPOSITION((36 / 2), (int6 + (35 * (int8 / 4))), 1, 0);
                                break;
                            }
                        };
                        break;
                    }
                    case 3: {
                        switch (MODULO(int8, 4)) {
                            case 0: {
                                CC_SETPOSITION((0 - 36), (int6 + (35 * (int8 / 4))), 1, 0);
                                break;
                            }
                            case 1: {
                                CC_SETPOSITION(0, (int6 + (35 * (int8 / 4))), 1, 0);
                                break;
                            }
                            case 2: {
                                CC_SETPOSITION(36, (int6 + (35 * (int8 / 4))), 1, 0);
                                break;
                            }
                        };
                        break;
                    }
                    case 0: {
                        switch (MODULO(int8, 4)) {
                            case 0: {
                                CC_SETPOSITION(SCALE((0 - 36), 2, 3), (int6 + (35 * (int8 / 4))), 1, 0);
                                break;
                            }
                            case 1: {
                                CC_SETPOSITION(((0 - 36) / 2), (int6 + (35 * (int8 / 4))), 1, 0);
                                break;
                            }
                            case 2: {
                                CC_SETPOSITION((36 / 2), (int6 + (35 * (int8 / 4))), 1, 0);
                                break;
                            }
                            case 3: {
                                CC_SETPOSITION(SCALE(36, 2, 3), (int6 + (35 * (int8 / 4))), 1, 0);
                                break;
                            }
                        };
                        break;
                    }
                };
                if ((MODULO(int8, 4) == 3)) {
                    int7 = ABS(--int7);
                };
                int8 = (int8 + 1);
            };
        };
        if ((int8 > 0)) {
            var int2 = (35 + (35 * ((int8 - 1) / 4)));
            var int1 = MAX(int1, ((36 * MIN(4, int8)) + 20));
        } else {
            int2 = 0;
        };
        int7 = (int7 + 1);
    };
    return [int7, int1, int2, int4];
}