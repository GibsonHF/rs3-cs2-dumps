//
function script9566(int0: unknown_int, int1: int, int2: int, int3: int, int4: component, int5: int, int6: fontmetrics, int7: int, int8: unknown_int, int9: unknown_int, string0: string): void {
    if ((script4761(int3) == 0)) {
        return;
    };
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    script6211(int4, int5);
    var int16 = script10074();
    var int17 = script10075();
    var int18 = script10076();
    var int19 = 0;
    if (((varclient_2 != 1) || (int8 == 1))) {
        var int2 = MIN(int2, script14195(int16));
        IF_OPENSUBCLIENT(int17, 1486);
        IF_SETSIZE(0, 0, 0, 0, comp(1486, 1));
        IF_SETPARAM_INT(4145, -1, int18);
        IF_SETHIDE(true, comp(1486, 14));
        CC_DELETEALL(comp(1486, 14));
        IF_SETHIDE(true, comp(1486, 15));
        IF_SETTEXT("null", comp(1486, 15));
        IF_SETHIDE(true, comp(1477, 911));
        if ((int1 != -1)) {
            IF_SETPARAM_INT(4145, int1, int18);
            IF_SETHIDE(false, comp(1486, 14));
            IF_SETSIZE(0, 0, 0, 0, comp(1486, 14));
            if ((CC_FIND(int18, 0) == 1)) {
                switch (int1) {
                    case 0: {
                        script7591();
                        break;
                    }
                    case 7: {
                        script2556();
                        break;
                    }
                    case 14: {
                        script16458();
                        break;
                    }
                    case 15: {
                        script16454();
                        break;
                    }
                    case 21: {
                        script7345();
                        break;
                    }
                    case 16: {
                        script16447();
                        break;
                    }
                    case 17: {
                        script16449();
                        break;
                    }
                    case 9: {
                        script7346();
                        break;
                    }
                    case 10: {
                        script14744();
                        break;
                    }
                    case 11: {
                        script14745();
                        break;
                    }
                    case 18: {
                        script16446(string0);
                        break;
                    }
                    case 1: {
                        script5838();
                        break;
                    }
                    case 2: {
                        script10064();
                        break;
                    }
                    case 3:
                    case 4: {
                        script10760(comp(1486, 14), comp(1486, 14), string0);
                        int19 = 1;
                        break;
                    }
                    case 13: {
                        script10760(comp(1486, 14), comp(1486, 14), string0);
                        break;
                    }
                    case 5: {
                        script13319();
                        break;
                    }
                    case 6: {
                        script13479();
                        break;
                    }
                    case 8: {
                        script5838();
                        break;
                    }
                    case 19: {
                        script11176();
                        break;
                    }
                    case 12: {
                        script14711();
                        break;
                    }
                };
            };
            if (((IF_GETWIDTH(comp(1486, 14)) == 0) || (IF_GETHEIGHT(comp(1486, 14)) == 0))) {
                script8808();
                return;
            };
            IF_SETSIZE(IF_GETWIDTH(comp(1486, 14)), IF_GETHEIGHT(comp(1486, 14)), 0, 0, comp(1486, 1));
        } else if ((strcmp(string0, "") != 0)) {
            IF_SETHIDE(false, comp(1486, 14));
            script9567(string0, int6, int7, int2, comp(1486, 1), comp(1486, 14));
        } else {
            script8808();
            return;
        };
        int12 = IF_GETWIDTH(comp(1486, 1));
        int13 = IF_GETHEIGHT(comp(1486, 1));
        IF_SETSIZE((int12 + (5 * 2)), (int13 + (5 * 2)), 0, 0, comp(1486, 1));
        varclient_2 = 1;
    };
    int12 = IF_GETWIDTH(comp(1486, 1));
    int13 = IF_GETHEIGHT(comp(1486, 1));
    [int10, int11, int14, int15] = script12613(int4, int5);
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    var int23 = 0;
    [int20, int21, int22, int23] = script14244();
    var int24 = (int11 - (int13 + 2));
    var int25 = int10;
    if (((int24 < int21) || (int9 == 1))) {
        int24 = ((int11 + int15) + 2);
    };
    if (((int24 < int21) || (((int24 < int11) && ((int24 + int13) > int11)) || ((int24 >= int11) && ((int24 + int13) > int23))))) {
        int25 = (int10 - (int12 + 2));
        if ((int25 < int20)) {
            int25 = ((int10 + int14) + 2);
        };
        int24 = ((int11 + (int15 / 2)) - (int13 / 2));
        int24 = MIN(MAX(int24, int21), (int23 - int13));
    } else {
        int25 = ((int10 + (int14 / 2)) - (int12 / 2));
        int25 = MIN(MAX(int25, int20), (int22 - int12));
    };
    IF_SETPOSITION(int25, (int24 - script20394(10)), 0, 0, comp(1486, 1));
    if ((((int19 == 1) && (IF_FIND(comp(1486, 1)) == 1)) && (IF_FIND[1](comp(1477, 911)) == 1))) {
        CC_SETPOSITION[1](((CC_GETX() + (CC_GETWIDTH() / 2)) - (CC_GETWIDTH[1]() / 2)), (((CC_GETY() + CC_GETHEIGHT()) - CC_GETHEIGHT[1]()) - 5), 0, 0);
    };
    return;
}