//
function script9326(int0: number, int1: number): void {
    var int2 = 44;
    if ((script6431() == 1)) {
        int2 = 52;
    };
    var int3 = 0;
    var int4 = script14337();
    var int5 = -1;
    var int6 = 8;
    var int7 = 5;
    var int8 = IF_GETWIDTH(33882311);
    var int9 = 0;
    var int10 = 0;
    while ((int3 < int4)) {
        if ((CC_FIND(33882313, int3) == 1)) {
            if ((int1 == 1)) {
                int5 = CC_GETINVOBJECT();
            } else {
                int5 = INV_GETOBJ(95, int3);
            };
            if (((int5 != -1) && (int5 != 48447))) {
                switch (int0) {
                    case 2: {
                        int10 = script734(OC_MEMBERS(int5));
                        break;
                    }
                    case 3: {
                        int10 = script734((1 - OC_MEMBERS(int5)));
                        break;
                    }
                    case 5: {
                        if (((OC_TRADEABLE(int5) == 1) && (item_getparam(int5, 5771) == 0))) {
                            int10 = 1;
                        } else {
                            int10 = 0;
                        };
                        break;
                    }
                    case 6: {
                        if (((OC_TRADEABLE(int5) == 0) || (item_getparam(int5, 5771) == 1))) {
                            int10 = 1;
                        } else {
                            int10 = 0;
                        };
                        break;
                    }
                };
            } else {
                int10 = 0;
            };
            if ((int10 == 1)) {
                CC_SETPOSITION(int6, int7, 0, 0);
                CC_SETHIDE(0);
                int6 = (int6 + int2);
                if (((int6 + 36) >= int8)) {
                    int6 = 8;
                    int7 = (int7 + int2);
                };
                int9 = (int9 + 1);
            } else {
                CC_SETHIDE(1);
            };
        };
        int3 = (int3 + 1);
    };
    if (((int6 == 8) && (int7 == 5))) {
        IF_SETHIDE(0, 33882309);
    } else {
        IF_SETHIDE(1, 33882309);
    };
    while ((int3 < 1820)) {
        if ((CC_FIND(33882313, int3) == 1)) {
            CC_SETHIDE(1);
        };
        int3 = (int3 + 1);
    };
    IF_SETSCROLLPOS(0, 0, 33882311);
    if ((int6 > 8)) {
        int7 = (int7 + int2);
    };
    script13828(int7);
    script9302(int9);
    return;
}