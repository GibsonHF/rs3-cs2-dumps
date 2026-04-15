//
function script3799(int0: component, int1: component, int2: int, int3: unknown_int, int4: component): void {
    var int5 = (IF_GETSCROLLHEIGHT(int1) - IF_GETHEIGHT(int1));
    if ((int5 == 0)) {
        int5 = 1;
    };
    if ((int2 < 0)) {
        var int2 = 0;
    };
    if ((int2 > int5)) {
        int2 = int5;
    };
    var int6 = IF_GETSCROLLY(int1);
    IF_SETSCROLLPOS(IF_GETSCROLLX(int1), int2, int1);
    switch (int1) {
        case 8978518: {
            varclient_7 = int2;
            if (((varbitclient_41275 == 0) && (script6431() == true))) {
                varclient_6798 = (CLIENTCLOCK() + 250);
            };
            break;
        }
        case 96141504: {
            varclient_2840 = int2;
            break;
        }
        case 96469185: {
            varclient_2842 = int2;
            break;
        }
        case 96403649: {
            varclient_2844 = int2;
            break;
        }
        case 96338113: {
            varclient_2846 = int2;
            break;
        }
        case 30408897: {
            varclient_3766 = int2;
            break;
        }
        case 100204736: {
            varclient_4506 = int2;
            break;
        }
        case 86310985: {
            varclient_8177 = int2;
            break;
        }
        case 33882311: {
            script14370(varbitplayer_45141, int2);
            break;
        }
        case 86048842: {
            varclient_8168 = int2;
            break;
        }
        case 59572266: {
            varclient_1122 = int2;
            break;
        }
        case 59768860: {
            varclient_1124 = int2;
            break;
        }
        case 68419595: {
            if ((unk11096(68419589) == 1)) {
                varclient_1122 = int2;
            } else if ((unk11096(68419591) == 1)) {
                varclient_1124 = int2;
            };
            break;
        }
        case 12255236: {
            varclient_88 = int2;
            break;
        }
        case 92798979: {
            varclient_88 = int2;
            break;
        }
        case 73007109: {
            script5082(int1);
            break;
        }
        case 104071170:
        case 110166021: {
            script11826(int1, int2, int3);
            break;
        }
        case 120783031: {
            script13173(int6, int2);
            break;
        }
        case 75759619: {
            varclient_6520 = int2;
            break;
        }
        case 41549834: {
            varclient_6739 = 0;
            varclient_6740 = 0;
            varclient_6741 = IF_GETSCROLLY(comp(634, 10));
            if ((int3 == 0)) {
                stack(11960);
                stack(41549867);
                IF_SETGRAPHIC();
            } else {
                stack(11946);
                stack(41549867);
                IF_SETGRAPHIC();
            };
            script3660(int2);
            return;
        }
        case 98172930: {
            script20652(int2, int5);
            break;
        }
        case 55902214: {
            script20557(int2, int5);
            break;
        }
    };
    var int7 = 0;
    if (((int4 != comp(-1, 65535)) && (IF_FIND(int4) == 1))) {
        int7 = ((IF_GETHEIGHT(int0) - CC_GETHEIGHT()) - 10);
        CC_SETPOSITION(CC_GETX(), (5 + SCALE(int2, int5, int7)), 0, 0);
    } else if ((CC_FIND(int0, 1) == 1)) {
        if ((varbitplayer_22875 == 2)) {
            int7 = (IF_GETHEIGHT(int0) - CC_GETHEIGHT());
            CC_SETPOSITION(4, SCALE(int2, int5, int7), 0, 0);
        } else {
            int7 = (((IF_GETHEIGHT(int0) - 32) - CC_GETHEIGHT()) - 10);
            CC_SETPOSITION(0, (21 + SCALE(int2, int5, int7)), 0, 0);
        };
        if ((CC_FIND[1](int0, 2) == 1)) {
            CC_SETPOSITION[1](0, (CC_GETY() - 5), 0, 0);
        };
        if ((CC_FIND[1](int0, 3) == 1)) {
            CC_SETPOSITION[1](0, (CC_GETY() + CC_GETHEIGHT()), 0, 0);
        };
    };
    return;
}