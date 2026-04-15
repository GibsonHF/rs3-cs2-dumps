//
function script19520(int0: int, int1: unknown_int): void {
    var int2 = 44;
    if ((script6431() == true)) {
        int2 = 52;
    };
    var int3 = 0;
    var int4 = script19579();
    var int5 = -1 as obj;
    var int6 = 0;
    var int7 = 8;
    var int8 = 5;
    var int9 = IF_GETWIDTH(comp(1313, 74));
    var int10 = 0;
    var int11 = false;
    while ((int3 < int4)) {
        if ((CC_FIND(comp(1313, 75), int3) == 1)) {
            if ((int1 == 1)) {
                int5 = CC_GETINVOBJECT();
                int6 = CC_GETINVCOUNT();
            } else {
                int5 = INV_GETOBJ(963 as inv, int3);
                int6 = INV_GETNUM(963 as inv, int3);
            };
            if (((int5 != -1 as obj) && (int5 != 48447 as obj))) {
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
                            int11 = true;
                        } else {
                            int11 = false;
                        };
                        break;
                    }
                    case 6: {
                        if (((OC_TRADEABLE(int5) == 0) || (item_getparam(int5, 5771) == 1))) {
                            int11 = true;
                        } else {
                            int11 = false;
                        };
                        break;
                    }
                    case 7: {
                        if ((((int5 != -1 as obj) && (int5 != 48447 as obj)) && (int6 == 0))) {
                            int11 = true;
                        } else {
                            int11 = false;
                        };
                        break;
                    }
                };
            } else {
                int11 = false;
            };
            if ((int11 == true)) {
                CC_SETPOSITION(int7, int8, 0, 0);
                CC_SETHIDE(false);
                int7 = (int7 + int2);
                if (((int7 + 36) >= int9)) {
                    int7 = 8;
                    int8 = (int8 + int2);
                };
                int10 = (int10 + 1);
            } else {
                CC_SETHIDE(true);
            };
        };
        int3 = (int3 + 1);
    };
    if (((int7 == 8) && (int8 == 5))) {
        IF_SETHIDE(false, comp(1313, 72));
    } else {
        IF_SETHIDE(true, comp(1313, 72));
    };
    while ((int3 < 200)) {
        if ((CC_FIND(comp(1313, 75), int3) == 1)) {
            CC_SETHIDE(true);
        };
        int3 = (int3 + 1);
    };
    IF_SETSCROLLPOS(0, 0, comp(1313, 74));
    if ((int7 > 8)) {
        int8 = (int8 + int2);
    };
    script19544(int8);
    script19503(int10);
    return;
}