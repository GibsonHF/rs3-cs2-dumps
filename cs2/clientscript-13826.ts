//
function script13826(int0: inv, int1: component, int2: int, int3: int): void {
    if ((script6354(comp(517, 201)) == 0)) {
        return;
    };
    if ((CC_FIND(int1, int2) == 1)) {
        if ((CC_GETINVOBJECT() == 48447 as obj)) {
            CANCEL_INTERFACE_DRAG();
            return;
        };
        varclient_3822 = CC_GETINVOBJECT();
    };
    if ((script6431() == true)) {
        ACTIVECLANCHANNEL_FIND_AFFINED(1);
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1 as obj;
    var int9 = script8403(comp(517, 199));
    var int10 = script8404(comp(517, 199));
    var int11 = IF_GETHEIGHT(comp(517, 199));
    var int12 = IF_GETWIDTH(comp(517, 199));
    var int13 = IF_GETSCROLLY(comp(517, 199));
    var int14 = 1;
    if ((((((varbitplayer_45140 != 0) || (int9 < 0)) || (int9 > int12)) || (int10 < 0)) || (int10 > int11))) {
        IF_SETHIDE(true, comp(517, 209));
        IF_SETHIDE(true, comp(517, 207));
        varclient_6686 = 0;
        int14 = 0;
    };
    if ((int0 == 95 as inv)) {
        varclient_3823 = 95 as inv;
        varclient_6707 = int2;
    } else {
        varclient_3823 = int0;
        int8 = OC_UNCERT(INV_GETOBJ(int0, int2));
        if ((script3802(int8) == true)) {
            int6 = script14341(int8);
            int7 = int6;
        } else {
            int6 = script14342(int8, 0, 1);
            int7 = int6;
        };
        if (((int6 == -1) && (int7 == -1))) {
            varclient_6707 = (1820 + 1);
            varclient_6708 = 0;
        } else {
            if ((int14 == 1)) {
                if (((IF_GETHIDE(comp(517, 209)) == true) && (IF_GETHIDE(comp(517, 207)) == true))) {
                    int4 = script5798(int7);
                    int5 = script14374(int4);
                    if ((((varbitplayer_45141 != 1) && (varbitplayer_45141 != int4)) && (int7 != -1))) {
                        if ((varbitplayer_45911 == 0)) {
                            IF_TRIGGEROP(comp(517, 169), int4, 1);
                        };
                        return;
                    };
                    if (((int6 != -1) && (CC_FIND[1](comp(517, 201), int6) == 1))) {
                        varclient_6707 = -1;
                        varclient_6708 = 1;
                        script13827(comp(517, 209));
                    };
                    if (((int7 != -1) && (CC_FIND[1](comp(517, 201), int7) == 1))) {
                        if ((int6 == -1)) {
                            varclient_6707 = (1820 + 1);
                            varclient_6708 = 0;
                            script13827(comp(517, 207));
                        };
                        script14370(varbitplayer_45141, MAX(0, MAX((((CC_GETY[1]() + CC_GETHEIGHT[1]()) + 2) - (int11 / 2)), MIN(((CC_GETY[1]() - 2) - (int11 / 2)), int13))));
                        script157(comp(517, 195), comp(517, 199), script14369(varbitplayer_45141), 1);
                    };
                };
            } else {
                varclient_6708 = 0;
                IF_SETHIDE(true, comp(517, 209));
                IF_SETHIDE(true, comp(517, 207));
            };
            return;
        };
    };
    varclient_6678 = CLIENTCLOCK();
    if ((script14379() == 1)) {
        return;
    };
    var int15 = 0;
    if ((int10 < 30)) {
        if ((int10 < 15)) {
            int15 = -8;
        } else {
            int15 = -4;
        };
    } else if ((int10 > (int11 - 30))) {
        if ((int10 > (int11 - 15))) {
            int15 = 8;
        } else {
            int15 = 4;
        };
    };
    varclient_6686 = (varclient_6686 + 1);
    if (((varclient_6686 > 5) && (int15 != 0))) {
        script14370(varbitplayer_45141, (int13 + int15));
        script157(comp(517, 195), comp(517, 199), (int13 + int15), 1);
    };
    return;
}