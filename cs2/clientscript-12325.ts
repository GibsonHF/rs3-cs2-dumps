//
function script12325(int0: struct, int1: unknown_int, int2: unknown_int): void {
    if ((int0 == -1 as struct)) {
        return;
    };
    var int3 = struct_getparam(int0, 5650);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    var int4 = IF_GETLAYER(int3);
    if ((int4 == comp(-1, 65535))) {
        return;
    };
    var int5 = 0;
    var int6 = 1;
    var int7 = 0;
    if ((IF_FIND(int3) == 1)) {
        int5 = cc_getparam(5643);
        int6 = cc_getparam(5644);
        int7 = cc_getparam(5645);
    };
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    [int8, int9, int10] = script12324(int6, int7);
    var int11 = -1;
    var int12 = IF_GETNEXTSUBID(int3);
    var int13 = IF_GETHEIGHT(int3);
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = SCALE(int13, -100, int10);
    var int18 = (int13 - int17);
    var int19 = 2;
    if ((varbitclient_30621 == 1)) {
        int19 = (16 - (1 * varbitclient_30622));
    };
    var int20 = 0;
    var int21 = 0;
    var int22 = 0;
    while ((++int11 < int12)) {
        if ((CC_FIND(int3, int11) == 1)) {
            CC_SETTRANS(127);
            [int21, int22] = script12312(int21, int22, cc_getparam(5946));
            if ((int1 == 1)) {
                cc_setparam(5932, SCALE(int13, 100, SCALE(cc_getparam(5946), int8, 50)));
            };
            int14 = CC_GETHEIGHT();
            if ((cc_getparam(5929) == 0)) {
                int14 = (int14 * -1);
            };
            if ((int2 == 1)) {
                int14 = cc_getparam(5932);
            } else {
                int14 = script12327(int14, cc_getparam(5932));
            };
            if ((int14 < 0)) {
                int14 = (int14 * -1);
                cc_setparam(5929, 0);
                int16 = int18;
                CC_SETCOLOUR(varclient_5176);
            } else {
                cc_setparam(5929, 2);
                int16 = int17;
                CC_SETCOLOUR(varclient_5173);
            };
            int15 = CC_GETX();
            if ((varbitclient_30621 == 1)) {
                cc_setparam(5926, (MODULO(((int12 - int5) + int11), int12) * int19));
                if ((int2 == 1)) {
                    int15 = cc_getparam(5926);
                } else {
                    int15 = script12327(int15, cc_getparam(5926));
                };
            } else {
                int15 = (MODULO(((int12 - int5) + int11), int12) * int19);
            };
            CC_SETSIZE(CC_GETWIDTH(), int14, 0, 0);
            CC_SETPOSITION(int15, int16, 0, cc_getparam(5929));
            int20 = (int20 + cc_getparam(5932));
        };
    };
    if (((int1 == 1) && (CC_FIND(int4, 1) == 1))) {
        CC_SETPOSITION(0, (int17 - 1), 0, 2);
    };
    var int23 = 0;
    if (((varbitclient_30628 == 1) && (CC_FIND(int4, 0) == 1))) {
        cc_setparam(5927, (int17 + (int20 / int12)));
        if ((int2 == 1)) {
            int23 = cc_getparam(5927);
        } else {
            int23 = script12327((int13 - (CC_GETY() + CC_GETHEIGHT())), cc_getparam(5927));
        };
        CC_SETPOSITION(0, int23, 0, 2);
    };
    var int24 = struct_getparam(int0, 5646);
    var int25 = 1;
    var int26 = 0;
    var int27 = 0;
    var int28 = 0;
    var int29 = 0;
    var string0 = "";
    if (((int24 != comp(-1, 65535)) && (CC_FIND(int24, 1) == 1))) {
        int25 = script12303();
        [int26, int27] = script12299(varbitclient_30618);
        if (((varbitclient_30621 == 1) && (IF_FIND[1](int3) == 1))) {
            string0 = "~";
            int28 = MODULO(((CLIENTCLOCK() - cc_getparam[1](5642)) - varclient_5159), (varclient_5157 * int25));
            int28 = ((varclient_5157 * int25) - ((int28 / varclient_5158) * varclient_5158));
        };
        string0 = `Based on data recorded over the current time window (${string0}${script12291(cc_getparam(4261))})`;
        CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
        int29 = script12311(int21, int22);
        int29 = SCALE(int29, (((int12 * varclient_5157) * int25) - int28), int27);
        int29 = script11853(int29, varbitclient_30620);
        CC_SETTEXT(script11498(int29, varbitclient_30619, int26, cc_getparam(5946)));
    };
    var int30 = struct_getparam(int0, 5647);
    var int31 = struct_getparam(int0, 5648);
    if ((int1 == 1)) {
        if ((((int30 != comp(-1, 65535)) && (CC_FIND(int30, 0) == 1)) && (CC_FIND[1](int30, 1) == 1))) {
            CC_SETTEXT(script11498(script11853(int7, varbitclient_30620), varbitclient_30619, varbitclient_30620, 0));
            CC_SETTEXT[1](script11498(script11853(int6, varbitclient_30620), varbitclient_30619, varbitclient_30620, 0));
        };
        if ((((int31 != comp(-1, 65535)) && (CC_FIND(int31, 0) == 1)) && (CC_FIND[1](int31, 1) == 1))) {
            CC_SETTEXT(script11498(script11853(int7, varbitclient_30620), varbitclient_30619, varbitclient_30620, 0));
            CC_SETTEXT[1](script11498(script11853(int6, varbitclient_30620), varbitclient_30619, varbitclient_30620, 0));
        };
    };
    return;
}