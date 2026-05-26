//
function script18096(int0: number, int1: number): void {
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    var int4 = comp(-1, 65535);
    var int5 = comp(-1, 65535);
    var int6 = comp(-1, 65535);
    var int7 = comp(-1, 65535);
    var int8 = -1;
    var int9 = 0;
    switch (int0) {
        case 1: {
            int6 = comp(1228, 21);
            int2 = comp(1228, 6);
            int3 = comp(1228, 26);
            int4 = comp(1228, 27);
            int5 = comp(1228, 28);
            int7 = comp(1228, 20);
            int8 = 4312;
            break;
        }
        case 2: {
            int6 = comp(1228, 10);
            int2 = comp(1228, 7);
            int3 = comp(1228, 15);
            int4 = comp(1228, 16);
            int5 = comp(1228, 17);
            int7 = comp(1228, 9);
            int9 = 16384;
            int8 = 4437;
            break;
        }
        default: {
            return;
        }
    };
    var int10 = script6431();
    var int11 = 0;
    var int12 = 0;
    CC_DELETEALL(int7);
    if ((IF_FIND(int7) == 1)) {
        script2994(int7, 0, 0, 0, 1, 1, 250, 250, 0, 0, int8);
        CC_SET2DANGLE((int9 + 32768));
        CC_SETONTIMER(callback(script17942, int7, 0, -2000));
        script2994(int7, 1, 0, 0, 1, 1, 250, 250, 0, 0, int8);
        CC_SETONTIMER(callback(script17942, int7, 1, -2000));
        CC_SET2DANGLE(int9);
    };
    var int13 = script17853();
    if ((int13 == -1)) {
        return;
    };
    CC_DELETEALL(int5);
    if ((IF_FIND(int5) == 1)) {
        switch (int1) {
            case 0: {
                IF_SETTEXT("Premier<br>Hero Pass", int3);
                IF_SETTEXT("Upgrade to Premier Hero Pass and earn over 100 rewards!", int4);
                IF_SETGRAPHIC(9416 as graphic, int6);
                if ((int10 == 1)) {
                    int12 = script18097(2, int12);
                    int12 = (int12 + 6);
                };
                int12 = script18097(1, int12);
                break;
            }
            case 1: {
                IF_SETTEXT("Premier Hero Pass Bundle", int3);
                IF_SETTEXT("Purchase the Premier Hero Pass bundle and earn over 100 rewards and 1250 Emblems!", int4);
                IF_SETGRAPHIC(9416 as graphic, int6);
                if ((int10 == 1)) {
                    int12 = script18097(4, int12);
                    int12 = (int12 + 6);
                };
                int12 = script18097(3, int12);
                break;
            }
            case 2: {
                IF_SETTEXT("Underworld<br>Emblems", int3);
                IF_SETTEXT("Purchase Emblems to spend on exclusive items in the Hero Store.", int4);
                script17927();
                IF_SETGRAPHIC(9856 as graphic, int6);
                if ((int10 == 1)) {
                    int12 = script18097(20, int12);
                    int12 = script18097(19, (int12 + 6));
                } else {
                    int12 = script18098(13, 15, int12);
                    int12 = script18099(17, (int12 + 6));
                };
                break;
            }
            case 3: {
                IF_SETTEXT("Hero Pass<br>Levels", int3);
                IF_SETTEXT("Purchase the Hero Pass Levels for instant access to Hero Pass rewards.", int4);
                IF_SETGRAPHIC(8428 as graphic, int6);
                if ((int10 == 1)) {
                    int12 = script18097(20, int12);
                    int12 = script18097(19, (int12 + 6));
                } else {
                    int11 = (script17890(int13) - script17862(7906));
                    if ((int11 > 5)) {
                        int12 = script18098(5, 7, int12);
                        if ((int11 > 20)) {
                            int12 = script18098(9, 11, (int12 + 6));
                        } else if ((int11 > 10)) {
                            int12 = script18099(9, (int12 + 6));
                        };
                    } else {
                        int12 = script18099(5, (int12 + 6));
                    };
                };
                break;
            }
            default: {
                IF_SETHIDE(true, int2);
                return;
            }
        };
        IF_SETHIDE(false, int2);
    };
    return;
}