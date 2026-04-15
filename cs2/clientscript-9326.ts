//
function script9326(int0: int, int1: unknown_int): void {
    var int2 = 44;
    if ((script6431() == true)) {
        int2 = 52;
    };
    var int3 = 0;
    var int4 = script14337();
    var int5 = -1 as obj;
    var int6 = 8;
    var int7 = 5;
    var int8 = IF_GETWIDTH(comp(517, 199));
    var int9 = 0;
    var int10 = false;
    while ((int3 < int4)) {
        if ((CC_FIND(comp(517, 201), int3) == 1)) {
            if ((int1 == 1)) {
                int5 = CC_GETINVOBJECT();
            } else {
                int5 = INV_GETOBJ(95 as inv, int3);
            };
            if (((int5 != -1 as obj) && (int5 != 48447 as obj))) {
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
                            int10 = true;
                        } else {
                            int10 = false;
                        };
                        break;
                    }
                    case 6: {
                        if (((OC_TRADEABLE(int5) == 0) || (item_getparam(int5, 5771) == 1))) {
                            int10 = true;
                        } else {
                            int10 = false;
                        };
                        break;
                    }
                };
            } else {
                int10 = false;
            };
            if ((int10 == true)) {
                CC_SETPOSITION(int6, int7, 0, 0);
                CC_SETHIDE(false);
                int6 = (int6 + int2);
                if (((int6 + 36) >= int8)) {
                    int6 = 8;
                    int7 = (int7 + int2);
                };
                int9 = (int9 + 1);
            } else {
                CC_SETHIDE(true);
            };
        };
        int3 = (int3 + 1);
    };
    if (((int6 == 8) && (int7 == 5))) {
        IF_SETHIDE(false, comp(517, 197));
    } else {
        IF_SETHIDE(true, comp(517, 197));
    };
    while ((int3 < 1820)) {
        if ((CC_FIND(comp(517, 201), int3) == 1)) {
            CC_SETHIDE(true);
        };
        int3 = (int3 + 1);
    };
    IF_SETSCROLLPOS(0, 0, comp(517, 199));
    if ((int6 > 8)) {
        int7 = (int7 + int2);
    };
    script13828(int7);
    script9302(int9);
    return;
}