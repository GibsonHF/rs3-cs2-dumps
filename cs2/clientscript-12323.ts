//
function script12323(int0: struct): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    var int1 = struct_getparam(int0, 5650);
    if ((int1 == comp(-1, 65535))) {
        return;
    };
    var int2 = IF_GETLAYER(int1);
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    if ((varclient_5156 != 0)) {
        return;
    };
    var int3 = 0;
    var int4 = 1;
    var int5 = 0;
    var int6 = CLIENTCLOCK();
    if (((IF_FIND(int1) == 1) && (IF_FIND[1](comp(1477, 13)) == 1))) {
        if ((((CLIENTCLOCK() > (cc_getparam(5641) + 1)) || (cc_getparam(5639) != varbitclient_30621)) || (cc_getparam(5640) != varbitclient_30622))) {
            script12318(int0);
            return;
        };
        if ((CLIENTCLOCK() <= cc_getparam(5641))) {
            return;
        };
        if ((cc_getparam[1](5641) > (cc_getparam(5641) - cc_getparam(5642)))) {
            cc_setparam(5641, CLIENTCLOCK());
        } else {
            cc_setparam(5641, CLIENTCLOCK());
            cc_setparam(5642, 1);
            return;
        };
        int6 = (CLIENTCLOCK() - cc_getparam(5642));
        int3 = cc_getparam(5643);
        int4 = cc_getparam(5644);
        int5 = cc_getparam(5645);
    };
    var int7 = 2;
    if ((varbitclient_30621 == 1)) {
        int7 = (16 - (1 * varbitclient_30622));
    };
    var int8 = IF_GETNEXTSUBID(int1);
    if ((int8 == 0)) {
        return;
    };
    var int9 = IF_GETHEIGHT(int1);
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    [int10, int11, int12] = script12324(int4, int5);
    var int13 = script12303();
    var int14 = MODULO(((int6 - varclient_5159) / MAX(1, varclient_5157)), int13);
    var int15 = MODULO((int6 - varclient_5159), (varclient_5157 * int13));
    var int16 = 0;
    if ((int15 == 0)) {
        int16 = int13;
    } else if ((varbitclient_30621 == 1)) {
        int16 = int14;
        int14 = 0;
    };
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    if ((int16 != 0)) {
        [int19, int17, int18] = script12310(comp(1477, 13), int14, int16);
        if ((int19 == 0)) {
            script12318(int0);
            return;
        };
    };
    var int20 = SCALE(script12311(int17, int18), int10, 50);
    var int21 = 0;
    var int22 = -1;
    var int23 = 0;
    var int24 = 0;
    var int25 = 0;
    var int26 = IF_GETHEIGHT(int1);
    var int27 = 0;
    var int28 = 0;
    if ((int15 != 0)) {
        if ((varbitclient_30621 == 1)) {
            [int19, int27, int28] = script12310(comp(1477, 14), 0, 1);
            if ((int19 == 0)) {
                script12318(int0);
                return;
            };
            [int17, int18] = script12313(int17, int18, int27, int28);
            int17 = script12311(int17, int18);
            int20 = SCALE(int17, int10, 50);
            if ((CC_FIND(int1, MODULO(((int8 + int3) - 1), int8)) == 1)) {
                if ((int20 > int11)) {
                    int4 = int17;
                    int21 = 1;
                    [int10, int11, int12] = script12324(int4, int5);
                    int20 = SCALE(int9, 100, int11);
                } else if ((int20 < int12)) {
                    int5 = int17;
                    int21 = 1;
                    [int10, int11, int12] = script12324(int4, int5);
                    int20 = SCALE(int9, 100, int12);
                } else {
                    int20 = SCALE(int9, 100, int20);
                };
                cc_setparam(5932, int20);
                cc_setparam(5946, int17);
                if ((int21 == 1)) {
                    IF_SETPARAM_INT(5644, int4, int1);
                    IF_SETPARAM_INT(5645, int5, int1);
                };
            };
        };
        script12325(int0, int21, 0);
    } else {
        if ((((varbitclient_30621 == 0) && (CC_FIND(int1, int3) == 1)) || ((varbitclient_30621 == 1) && (CC_FIND(int1, MODULO(((int8 + int3) - 1), int8)) == 1)))) {
            int17 = script12311(int17, int18);
            if ((int20 > int11)) {
                int4 = int17;
                int21 = 1;
                [int10, int11, int12] = script12324(int4, int5);
                int20 = SCALE(int9, 100, int11);
            } else if ((int20 < int12)) {
                int5 = int17;
                int21 = 1;
                [int10, int11, int12] = script12324(int4, int5);
                int20 = SCALE(int9, 100, int12);
            } else {
                int20 = SCALE(int9, 100, int20);
            };
            cc_setparam(5932, int20);
            cc_setparam(5946, int17);
            if ((int21 == 1)) {
                IF_SETPARAM_INT(5644, int4, int1);
                IF_SETPARAM_INT(5645, int5, int1);
            };
            if ((varbitclient_30621 == 0)) {
                int24 = SCALE(int9, -100, int12);
                int25 = (int9 - int24);
                if ((int20 < 0)) {
                    int20 = (int20 * -1);
                    cc_setparam(5929, 0);
                    int23 = int25;
                    CC_SETCOLOUR(varclient_5176);
                } else {
                    cc_setparam(5929, 2);
                    int23 = int24;
                    CC_SETCOLOUR(varclient_5173);
                };
                CC_SETSIZE(CC_GETWIDTH(), int20, 0, 0);
                CC_SETPOSITION(CC_GETX(), int23, 0, cc_getparam(5929));
            } else if ((CC_FIND(int1, int3) == 1)) {
                cc_setparam(5929, 2);
                CC_SETSIZE(CC_GETWIDTH(), 0, 0, 0);
                cc_setparam(5932, 0);
                CC_SETPOSITION((int8 * int7), 0, 0, cc_getparam(5929));
            };
        };
        int3 = MODULO((int3 + 1), int8);
        IF_SETPARAM_INT(5643, int3, int1);
        script12325(int0, int21, 0);
    };
    return;
}