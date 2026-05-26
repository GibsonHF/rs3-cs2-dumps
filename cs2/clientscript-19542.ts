//
function script19542(int0: number, int1: number, int2: number, int3: number): void {
    if ((script6354(86048843) == 0)) {
        return;
    };
    if ((CC_FIND(int1, int2) == 1)) {
        if ((CC_GETINVOBJECT() == 48447 as obj)) {
            CANCEL_INTERFACE_DRAG();
            return;
        };
        varclient_3822 = CC_GETINVOBJECT();
    };
    if ((script6431() == 1)) {
        ACTIVECLANCHANNEL_FIND_AFFINED(1);
    };
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = -1;
    var int9 = script8403(86048842);
    var int10 = script8404(86048842);
    var int11 = IF_GETHEIGHT(86048842);
    var int12 = IF_GETWIDTH(86048842);
    var int13 = IF_GETSCROLLY(86048842);
    var int14 = 1;
    if ((((((varbitplayer_45140 != 0) || (int9 < 0)) || (int9 > int12)) || (int10 < 0)) || (int10 > int11))) {
        IF_SETHIDE(1, 86048850);
        IF_SETHIDE(1, 86048848);
        varclient_6686 = 0;
        int14 = 0;
    };
    if ((int0 == 963 as inv)) {
        varclient_3823 = 963 as inv;
        varclient_6707 = int2;
    } else {
        varclient_3823 = int0;
        int8 = OC_UNCERT(INV_GETOBJ(int0, int2));
        if ((script3802(int8) == 1)) {
            int6 = script19583(int8);
            int7 = int6;
        } else {
            int6 = script19584(int8, 0, 1);
            int7 = int6;
        };
        if (((int6 == -1) && (int7 == -1))) {
            varclient_6707 = (200 + 1);
            varclient_6708 = 0;
        } else {
            if ((int14 == 1)) {
                if (((IF_GETHIDE(86048850) == 1) && (IF_GETHIDE(86048848) == 1))) {
                    if (((int6 != -1) && (CC_FIND[1](86048843, int6) == 1))) {
                        varclient_6707 = -1;
                        varclient_6708 = 1;
                        script19543(86048850);
                    };
                    if (((int7 != -1) && (CC_FIND[1](86048843, int7) == 1))) {
                        if ((int6 == -1)) {
                            varclient_6707 = (200 + 1);
                            varclient_6708 = 0;
                            script19543(86048848);
                        };
                        int13 = MAX(0, MAX((((CC_GETY[1]() + CC_GETHEIGHT[1]()) + 2) - (int11 / 2)), MIN(((CC_GETY[1]() - 2) - (int11 / 2)), int13)));
                        script157(86048838, 86048842, int13, 1);
                    };
                };
            } else {
                varclient_6708 = 0;
                IF_SETHIDE(1, 86048850);
                IF_SETHIDE(1, 86048848);
            };
            return;
        };
    };
    varclient_6678 = CLIENTCLOCK();
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
        script157(86048838, 86048842, (int13 + int15), 1);
    };
    return;
}