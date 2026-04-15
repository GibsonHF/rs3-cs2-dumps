//
function script18001(int0: dbrow, int1: boolean, int2: int, int3: component, int4: int, int5: int, int6: int, int7: int): void {
    var int8 = dbrow_getfield(varplayer_11339, 991264, 0);
    var int9 = false;
    if ((varclient_7294 != comp(-1, 65535))) {
        if (((varclient_7297 != 1) && (CC_FIND(varclient_7294, varclient_7295) == 1))) {
            script7872(true, 1, true, false);
        };
        if ((varclient_7296 != int2)) {
            script17976(int8, varclient_7296, varclient_7297);
            script18022(varclient_7296, script17874(varplayer_11339, varclient_7296), script17868(varplayer_11339, varclient_7296), -1, varclient_7297);
            int9 = script17874(varplayer_11339, varclient_7296);
            if (((int9 == true) && (int1 == false))) {
                script17984();
            } else if (((int9 == false) && (int1 == true))) {
                script17983();
            };
        };
    } else if ((int1 == true)) {
        script17983();
    };
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = -1;
    var int14 = comp(-1, 65535);
    var int15 = comp(-1, 65535);
    var int16 = 80;
    var int17 = script18023();
    if ((int7 > 0)) {
        int17 = script17969(varplayer_11339, 0, 0, int7);
        int17 = (int17 + script18024());
    };
    if ((CC_FIND(int3, int4) == 1)) {
        varclient_7294 = int3;
        varclient_7295 = int4;
        varclient_7296 = int2;
        varclient_7297 = int7;
        if ((int7 != 1)) {
            script7872(true, 1, true, true);
        };
        IF_SETPOSITION(CC_UNKNOWN1(), CC_UNKNOWN2(), 0, 0, comp(1227, 18));
        int14 = comp(1227, 35);
        int15 = comp(1227, 36);
        int10 = IF_GETSCROLLX(int15);
        int11 = IF_GETWIDTH(int15);
        switch (int7) {
            case 2: {
                int13 = IF_GETSCROLLWIDTH(int15);
                break;
            }
            default: {
                if ((CC_GETDYNAMICLAYER() == 1)) {
                    int12 = (int12 + CC_GETX());
                    if ((CC_GETDYNAMICLAYER() == 1)) {
                        int12 = (int12 + CC_GETX());
                        if ((CC_GETDYNAMICLAYER() == 1)) {
                            int12 = (int12 + CC_GETX());
                            if ((CC_GETDYNAMICLAYER() == 1)) {
                                int12 = (int12 + CC_GETX());
                            };
                        };
                    };
                };
                if (((int12 - int16) < int10)) {
                    int13 = MAX(0, (int12 - int16));
                } else if ((((int12 + int17) + int16) > (int10 + int11))) {
                    int13 = MAX(0, (((int12 + int16) + int17) - int11));
                };
                break;
            }
        };
        script17927();
        if ((varclient_7302 > 0)) {
            int13 = varclient_7303;
        };
        if ((int13 != -1)) {
            script1702(int14, int15, int13, 1);
        };
    };
    script17927();
    varclient_7303 = IF_GETSCROLLX(int15);
    script18002(int0, int1, int2, int5, int6, int8, int7, 0);
    varclient_7302 = -1;
    return;
}