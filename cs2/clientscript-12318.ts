//
function script12318(int0: number): void {
    if ((int0 == -1)) {
        return;
    };
    if ((varbitclient_30623 == 0)) {
        varbitclient_30623 = 1;
        varbitclient_30621 = 1;
        varbitclient_30622 = 0;
        varbitclient_30624 = 0;
        varbitclient_30625 = 0;
        varbitclient_30626 = 1;
        varbitclient_30627 = 1;
        varbitclient_30628 = 0;
        varbitclient_30629 = 1;
        varbitclient_30630 = 1;
    };
    var int1 = varbitclient_30629;
    if ((int0 == 33116)) {
        int1 = 1;
    };
    if ((varbitclient_30621 != 0)) {
        varbitclient_30621 = 1;
    };
    if (((varbitclient_30622 < 0) || (varbitclient_30622 > 4))) {
        varbitclient_30622 = 0;
    };
    var int2 = struct_getparam(int0, 5650);
    if ((int2 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int2);
    var int3 = IF_GETLAYER(int2);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int3);
    IF_SETONSCROLLWHEEL(callback(), int3);
    IF_SETONTIMER(callback(), int3);
    IF_SETONVARTRANSMIT(callback(), int3);
    if ((varclient_5156 != 0)) {
        return;
    };
    var int4 = script12285(varbitclient_30618, varbitclient_30619);
    if ((varbitclient_30630 == 1)) {
        varclient_5173 = enum_getvalue(0, 0, 10877, int4);
        varclient_5174 = enum_getvalue(0, 0, 10878, int4);
        varclient_5175 = enum_getvalue(0, 0, 10878, int4);
        varclient_5176 = varclient_5173;
        varclient_5177 = varclient_5174;
        varclient_5178 = varclient_5175;
    } else {
        varclient_5173 = 5373783;
        varclient_5174 = 16773632;
        varclient_5175 = 65288;
        varclient_5176 = 16736337;
        varclient_5177 = 16773632;
        varclient_5178 = 16717056;
    };
    var int5 = struct_getparam(int0, 5646);
    var int6 = IF_GETLAYER(int5);
    if (((int5 == comp(-1, 65535)) || (int6 == comp(-1, 65535)))) {
        return;
    };
    var int7 = IF_GETLAYER(int3);
    if ((int7 == comp(-1, 65535))) {
        return;
    };
    var int8 = varbitclient_30624;
    if ((int8 == 1)) {
        if ((((IF_GETHEIGHT(int6) - 28) - (IF_GETHEIGHT(int7) - IF_GETHEIGHT(int3))) >= 27)) {
            IF_SETSIZE(0, 28, 1, 0, int5);
        } else {
            int8 = 0;
            IF_SETSIZE(0, 0, 1, 0, int5);
        };
    } else {
        int8 = 0;
        IF_SETSIZE(0, 0, 1, 0, int5);
    };
    CC_DELETEALL(int5);
    var int9 = struct_getparam(int0, 5647);
    if ((int9 == comp(-1, 65535))) {
        return;
    };
    var int10 = varbitclient_30625;
    if ((int10 == 1)) {
        if ((((IF_GETWIDTH(int6) - 28) - (IF_GETWIDTH(int7) - IF_GETWIDTH(int3))) >= 80)) {
            IF_SETSIZE(28, 0, 0, 1, int9);
        } else {
            int10 = 0;
            IF_SETSIZE(0, 0, 0, 1, int9);
        };
    } else {
        int10 = 0;
        IF_SETSIZE(0, 0, 0, 1, int9);
    };
    CC_DELETEALL(int9);
    var int11 = struct_getparam(int0, 5648);
    if ((int11 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int11);
    int7 = IF_GETLAYER(int9);
    if ((int7 == comp(-1, 65535))) {
        return;
    };
    if ((int8 == 1)) {
        IF_SETSIZE(0, 28, 1, 1, int7);
    } else {
        IF_SETSIZE(0, 0, 1, 1, int7);
    };
    var int12 = struct_getparam(int0, 5649);
    if ((int12 == comp(-1, 65535))) {
        return;
    };
    CC_DELETEALL(int12);
    if ((varbitclient_30627 == 1)) {
        IF_SETHIDE(false, int12);
        CC_CREATE(int12, 3, 0);
        CC_SETPOSITION(-1, ((16384 * 3) / 4), 0, 5);
        CC_SETSIZE(-2, 0, 1, 1);
        script10010(28687);
        if ((int0 == 33115)) {
            script12591(4, 33125);
        };
        CC_CREATE(int12, 3, 1);
        CC_SETPOSITION(-1, (16384 / 2), 0, 5);
        CC_SETSIZE(-2, 0, 1, 1);
        script10010(28687);
        if ((int0 == 33115)) {
            script12591(4, 33125);
        };
        CC_CREATE(int12, 3, 2);
        CC_SETPOSITION(-1, (16384 / 4), 0, 5);
        CC_SETSIZE(-2, 0, 1, 1);
        script10010(28687);
        if ((int0 == 33115)) {
            script12591(4, 33125);
        };
    } else {
        IF_SETHIDE(true, int12);
    };
    int7 = IF_GETLAYER(int12);
    if ((int7 == comp(-1, 65535))) {
        return;
    };
    if ((int10 == 1)) {
        IF_SETSIZE(28, 0, 1, 1, int7);
    } else {
        IF_SETSIZE(0, 0, 1, 1, int7);
    };
    int7 = IF_GETLAYER(int6);
    if ((int7 == comp(-1, 65535))) {
        return;
    };
    if ((int1 == 1)) {
        IF_SETSIZE(0, 33, 1, 1, int7);
    } else {
        IF_SETSIZE(0, 0, 1, 1, int7);
    };
    var int13 = struct_getparam(int0, 5653);
    var int14 = struct_getparam(int0, 5654);
    if (((int13 == comp(-1, 65535)) || (int14 == comp(-1, 65535)))) {
        return;
    };
    CC_DELETEALL(int13);
    CC_DELETEALL(int14);
    var int15 = struct_getparam(int0, 5657);
    if ((int15 == comp(-1, 65535))) {
        return;
    };
    IF_SETONSCROLLWHEEL(callback(), int15);
    CC_DELETEALL(int15);
    var int16 = 0;
    int6 = IF_GETLAYER(int15);
    if ((int6 == comp(-1, 65535))) {
        return;
    };
    if ((int1 == 1)) {
        IF_SETSIZE(0, 33, 1, 0, int6);
        int16 = (IF_GETWIDTH(int6) - (4 * 2));
        int7 = struct_getparam(int0, 5652);
        if ((int7 != comp(-1, 65535))) {
            int16 = ((int16 - IF_GETWIDTH(int7)) - 4);
        };
        if ((int16 >= ((100 + IF_GETWIDTH(int15)) + 4))) {
            IF_SETHIDE(false, int15);
            int16 = ((int16 - IF_GETWIDTH(int15)) - 4);
        } else {
            IF_SETHIDE(true, int15);
        };
        int7 = struct_getparam(int0, 5655);
        if ((int7 != comp(-1, 65535))) {
            if ((varbitclient_30622 == 0)) {
                IF_SETHIDE(false, int7);
            } else {
                IF_SETHIDE(true, int7);
            };
            int7 = IF_GETLAYER(int7);
            if ((int7 != comp(-1, 65535))) {
                if ((int16 >= (100 + (2 * (IF_GETWIDTH(int7) + 4))))) {
                    IF_SETHIDE(false, int7);
                    int16 = (int16 - (2 * (IF_GETWIDTH(int7) + 4)));
                    int7 = struct_getparam(int0, 5656);
                    if ((int7 != comp(-1, 65535))) {
                        if ((varbitclient_30622 == 4)) {
                            IF_SETHIDE(false, int7);
                        } else {
                            IF_SETHIDE(true, int7);
                        };
                        int7 = IF_GETLAYER(int7);
                        if ((int7 != comp(-1, 65535))) {
                            IF_SETHIDE(false, int7);
                        };
                    };
                } else {
                    IF_SETHIDE(true, int7);
                    int7 = struct_getparam(int0, 5656);
                    if ((int7 != comp(-1, 65535))) {
                        int7 = IF_GETLAYER(int7);
                        if ((int7 != comp(-1, 65535))) {
                            IF_SETHIDE(true, int7);
                        };
                    };
                };
            };
        };
        int7 = IF_GETLAYER(int13);
        if ((int7 != comp(-1, 65535))) {
            IF_SETSIZE((IF_GETWIDTH(int6) - int16), IF_GETHEIGHT(int7), 1, 0, int7);
        };
        script10430(int13, int14, 0, 0, IF_GETWIDTH(int13), 0, 9734, -1, 32, "Select a group/row type.", int4, 1);
    } else {
        IF_SETSIZE(0, 0, 1, 0, int6);
    };
    var int17 = 1;
    var int18 = 0;
    IF_SETPARAM_INT(5644, int17, int2);
    IF_SETPARAM_INT(5645, int18, int2);
    IF_SETPARAM_INT(5643, 0, int2);
    IF_SETPARAM_INT(5641, CLIENTCLOCK(), int2);
    IF_SETPARAM_INT(5642, 0, int2);
    IF_SETPARAM_INT(5639, varbitclient_30621, int2);
    IF_SETPARAM_INT(5640, varbitclient_30622, int2);
    var int19 = MAX(1, script12303());
    var int20 = MODULO(((CLIENTCLOCK() - varclient_5159) / MAX(1, varclient_5157)), int19);
    var int21 = (((256 / int19) - 1) + varbitclient_30621);
    var int22 = 2;
    if ((varbitclient_30621 == 1)) {
        int22 = MAX(1, (16 - (1 * varbitclient_30622)));
    };
    var int23 = ((IF_GETWIDTH(int3) + varbitclient_30621) / int22);
    int23 = MIN(int23, int21);
    IF_SETSIZE(((int23 * int22) - varbitclient_30621), 0, 0, 1, int2);
    int23 = (int23 - varbitclient_30621);
    var int24 = IF_GETHEIGHT(int2);
    var int25 = -1;
    var int26 = 0;
    var int27 = 1;
    var int28 = 0;
    var int29 = 0;
    int25 = (int25 + 1);
    while ((int25 < int23)) {
        if ((int27 == 1)) {
            [int27, int28, int29] = script12310(96796686, ((((int23 - 1) - int25) * int19) + int20), int19);
            int28 = script12311(int28, int29);
            if ((int28 > int17)) {
                int17 = int28;
            } else if ((int28 < int18)) {
                int18 = int28;
            };
        };
        CC_CREATE(int2, 3, int25);
        if ((varbitclient_30621 == 1)) {
            CC_SETSIZE((int22 - 1), 0, 0, 0);
            CC_SETFILL(1);
        } else {
            CC_SETSIZE(int22, 0, 0, 0);
        };
        cc_setparam(5946, int28);
        CC_SETTRANS(127);
        CC_SETONMOUSEREPEAT(callback(script12326, -2147483645, -2147483643));
    };
    var int30 = 0;
    var int31 = 0;
    if ((varbitclient_30621 == 1)) {
        int23 = (int23 + 1);
        if ((int23 > 0)) {
            if (((int20 == 0) || (int27 == 0))) {
                int28 = 0;
                int29 = 0;
            } else {
                [int27, int28, int29] = script12310(96796686, 0, int20);
            };
            if ((int27 == 1)) {
                [int27, int30, int31] = script12310(96796687, 0, 1);
            };
            if ((int27 == 1)) {
                [int28, int29] = script12313(int28, int29, int30, int31);
            };
            int28 = script12311(int28, int29);
            if ((int28 > int17)) {
                int17 = int28;
            } else if ((int28 < int18)) {
                int18 = int28;
            };
            CC_CREATE(int2, 3, int25);
            CC_SETSIZE((int22 - 1), 0, 0, 0);
            CC_SETFILL(1);
            cc_setparam(5946, int28);
            CC_SETTRANS(127);
            CC_SETONMOUSEREPEAT(callback(script12326, -2147483645, -2147483643));
        };
    };
    IF_SETPARAM_INT(5644, int17, int2);
    IF_SETPARAM_INT(5645, int18, int2);
    var int32 = -1;
    if ((int27 == 0)) {
        int32 = (CLIENTCLOCK() + 1500);
    };
    IF_SETONTIMER(callback(script12322, int0, int32), int3);
    IF_SETONVARTRANSMIT(callback(script12317, int0, 3814, 1), int3);
    var string0 = "";
    var int33 = -1;
    var int34 = 0;
    var int35 = script10495(0);
    var int36 = 16777215;
    var int37 = script10495(3);
    var int38 = 0;
    var int39 = 0;
    var int40 = -1;
    var int41 = 0;
    if ((int23 > 0)) {
        IF_SETONSCROLLWHEEL(callback(script12301, -2147483646), int3);
        if ((int8 == 1)) {
            int34 = (((10 * varclient_5157) * int19) / 50);
            string0 = `Zoom: ${script12304()}`;
            string0 = `Interval: ${script12291(int34)}<br>${string0}`;
            int34 = (int34 * int23);
            string0 = `Time window: ${script12291(int34)}<br>${string0}`;
        } else if (((int1 == 1) && (IF_GETHIDE(int15) == false))) {
            int34 = (((10 * varclient_5157) * int19) / 50);
            string0 = `Zoom: ${script12304()}`;
            string0 = `Interval: ${script12291(int34)}<br>${string0}`;
            int34 = (int34 * int23);
            string0 = `Time window: ${script12291(int34)}<br>${string0}`;
        };
        if (((int1 == 1) && (IF_GETHIDE(int15) == false))) {
            IF_SETONSCROLLWHEEL(callback(script12301, -2147483646), int15);
            CC_CREATE(int15, 4, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(int36);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETPOSITION(0, 0, 2, 2);
            CC_SETSIZE(0, 0, 1, 1);
            CC_SETTEXT(script12291(int34));
            CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
        };
        if ((int8 == 1)) {
            CC_CREATE(int5, 4, 0);
            CC_SETTEXTFONT(29 as fontmetrics);
            CC_SETCOLOUR(int36);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(2, 1, 0);
            CC_SETPOSITION(0, 0, 2, 0);
            [int33, int38] = script12299(varbitclient_30618);
            CC_SETTEXT(enum_getvalue(0, 36, 10039 as cs2enum, int33));
            CC_SETSIZE((PARAWIDTH(CC_GETTEXT(), 1000, CC_GETFONTMETRICS()) + 4), 4, 0, 1);
            int16 = IF_GETWIDTH(CC_GETLAYER());
            int39 = PARAWIDTH("-888W", 1000, CC_GETFONTMETRICS());
            if ((varbitplayer_28120 == 1)) {
                int40 = PARAWIDTH("-2,088,888,888", 1000, CC_GETFONTMETRICS());
            };
            if ((int16 >= (((MAX(int39, int40) + CC_GETWIDTH()) + 25) + 4))) {
            } else if ((int16 < int39)) {
                int41 = 3;
            } else if ((int16 < (int39 + CC_GETWIDTH()))) {
                int41 = 3;
            } else if ((int16 < (int40 + CC_GETWIDTH()))) {
                int41 = 2;
            } else if ((int16 < (((MAX(int39, int40) + CC_GETWIDTH()) + 25) + 4))) {
                int41 = 1;
            };
            CC_CREATE[1](int5, 4, 1);
            CC_SETTEXTFONT[1](29 as fontmetrics);
            CC_SETCOLOUR[1](int36);
            CC_SETTEXTSHADOW[1](true);
            CC_SETTEXTALIGN[1](2, 1, 0);
            CC_SETPOSITION[1](0, 0, 0, 0);
            if ((int41 >= 3)) {
                CC_SETHIDE(true);
                CC_SETSIZE[1](0, 4, 1, 1);
            } else {
                CC_SETSIZE[1](CC_GETWIDTH(), 4, 1, 1);
            };
            cc_setparam[1](4261, int34);
            if ((int41 >= 2)) {
                cc_setparam[1](5946, 0);
            };
            CC_CREATE(int5, 5, 2);
            if ((int41 < 1)) {
                CC_SETSIZE(25, 25, 0, 0);
                CC_SETPOSITION(0, (((28 - 4) - 25) / 2), 0, 0);
                CC_SETGRAPHIC(script12288(varbitclient_30618, varbitclient_30619));
                string0 = script12292(script12286(int4));
                if ((strcmp(string0, "") != 0)) {
                    CC_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643));
                };
            };
        };
        if ((int10 == 1)) {
            CC_CREATE(int9, 4, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(int36);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(2, 1, 0);
            CC_SETPOSITION(4, 0, 2, 2);
            CC_SETSIZE(4, script7593("8888", 1000, CC_GETFONTMETRICS(), 0), 1, 0);
            CC_CREATE(int9, 4, 1);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(int36);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(2, 1, 0);
            CC_SETPOSITION(4, 0, 2, 0);
            CC_SETSIZE(4, script7593("8888", 1000, CC_GETFONTMETRICS(), 0), 1, 0);
        };
        if ((varbitclient_30626 == 1)) {
            CC_CREATE(int11, 4, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(int36);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETPOSITION(1, 0, 0, 2);
            CC_SETSIZE(0, script7593("8888", 1000, CC_GETFONTMETRICS(), 0), 1, 0);
            CC_CREATE(int11, 4, 1);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETCOLOUR(int36);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETPOSITION(1, 0, 0, 0);
            CC_SETSIZE(0, script7593("8888", 1000, CC_GETFONTMETRICS(), 0), 1, 0);
        };
        CC_CREATE(int3, 3, 0);
        if ((varbitclient_30628 == 1)) {
            CC_SETPOSITION(0, (int26 / int23), 0, 2);
            CC_SETSIZE(0, 2, 1, 0);
            CC_SETCOLOUR(16773632);
            CC_SETTRANS(127);
        };
        CC_CREATE(int3, 3, 1);
        CC_SETPOSITION(0, -1, 0, 2);
        CC_SETSIZE(0, 1, 1, 0);
        CC_SETCOLOUR(script10495(7));
        CC_SETTRANS(63);
        CC_SENDTOBACK();
        script12325(int0, 1, 1);
        CC_CREATE(int3, 3, 2);
        if ((varbitclient_30621 == 1)) {
            CC_SENDTOBACK();
            CC_SETFILL(1);
            cc_setparam(4424, 1);
            CC_SETONTIMER(callback(script12320, -2147483645, -2147483643, int2));
            script12321(int3, CC_GETID(), int2);
        };
    };
    return;
}