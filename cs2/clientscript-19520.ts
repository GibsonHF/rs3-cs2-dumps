//
function script19520(int0: number, int1: number): void {
    var int2 = 44;
    if ((script6431() == 1)) {
        int2 = 52;
    };
    var int3 = 0;
    var int4 = script19579();
    var int5 = -1;
    var int6 = 0;
    var int7 = 8;
    var int8 = 5;
    var int9 = IF_GETWIDTH(86048842);
    var int10 = 0;
    var int11 = 0;
    while ((int3 < int4)) {
        if ((CC_FIND(86048843, int3) == 1)) {
            if ((int1 == 1)) {
                int5 = CC_GETINVOBJECT();
                int6 = CC_GETINVCOUNT();
            } else {
                int5 = INV_GETOBJ(963, int3);
                int6 = INV_GETNUM(963, int3);
            };
            if (((int5 != -1) && (int5 != 48447))) {
                switch (int0) {
                    case 2: {
                        int11 = script734(OC_MEMBERS(int5));
                        break;
                    }
                    case 3: {
                        int11 = script734((1 - OC_MEMBERS(int5)));
                        break;
                    }
                    case 5: {
                        if (((OC_TRADEABLE(int5) == 1) && (item_getparam(int5, 5771) == 0))) {
                            int11 = 1;
                        } else {
                            int11 = 0;
                        };
                        break;
                    }
                    case 6: {
                        if (((OC_TRADEABLE(int5) == 0) || (item_getparam(int5, 5771) == 1))) {
                            int11 = 1;
                        } else {
                            int11 = 0;
                        };
                        break;
                    }
                    case 7: {
                        if ((((int5 != -1) && (int5 != 48447)) && (int6 == 0))) {
                            int11 = 1;
                        } else {
                            int11 = 0;
                        };
                        break;
                    }
                };
            } else {
                int11 = 0;
            };
            if ((int11 == 1)) {
                CC_SETPOSITION(int7, int8, 0, 0);
                CC_SETHIDE(0);
                int7 = (int7 + int2);
                if (((int7 + 36) >= int9)) {
                    int7 = 8;
                    int8 = (int8 + int2);
                };
                int10 = (int10 + 1);
            } else {
                CC_SETHIDE(1);
            };
        };
        int3 = (int3 + 1);
    };
    if (((int7 == 8) && (int8 == 5))) {
        IF_SETHIDE(0, 86048840);
    } else {
        IF_SETHIDE(1, 86048840);
    };
    while ((int3 < 200)) {
        if ((CC_FIND(86048843, int3) == 1)) {
            CC_SETHIDE(1);
        };
        int3 = (int3 + 1);
    };
    IF_SETSCROLLPOS(0, 0, 86048842);
    if ((int7 > 8)) {
        int8 = (int8 + int2);
    };
    script19544(int8);
    script19503(int10);
    return;
}