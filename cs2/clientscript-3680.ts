//[proc,music_v3_refresh]
function script3680(int0: component, int1: component, int2: component, int3: component, int4: component, int5: component, int6: component): void {
    switch (IF_GETGRAPHIC(int6)) {
        case 16926:
        case 16928: {
            break;
        }
        default: {
            script8808();
            varclient_1 = 0;
            break;
        }
    };
    IF_SETONTIMER(callback(), int0);
    var int7 = -1;
    if ((IF_FIND(int2) == 1)) {
        int7 = cc_getparam(1133);
    };
    var int8 = 0;
    var int9 = 0;
    var string0 = "";
    var int10 = STRING_LENGTH(varclient_2249);
    if (((((int10 <= 0) && (varclient_5 != 14)) && (IF_GETGRAPHIC(int0) != 16951 as graphic)) && (IF_GETGRAPHIC(int0) != 16949 as graphic))) {
        stack(16948);
        stack(int0);
        IF_SETGRAPHIC();
    };
    var int11 = 5;
    while ((int7 != -1)) {
        if (((CC_FIND(int3, (int7 * 2)) == 1) && (CC_FIND[1](int3, ((int7 * 2) + 1)) == 1))) {
            CC_CLEAROPS();
            CC_CLEAROPS[1]();
            string0 = LOWERCASE(CC_GETTEXT());
            if ((STRING_LENGTH(string0) > 0)) {
                if ((script837(int7) == 1)) {
                    if (((int10 == 0) || (STRING_INDEXOF_STRING(string0, varclient_2249, 0) != -1))) {
                        int8 = (int8 + 1);
                        if ((varclient_5917 != 2)) {
                            CC_SETOP(2, "Unlock hint");
                            CC_SETONTIMER(callback(script5258, int7, int3));
                            CC_SETHIDE(0);
                            CC_SETHIDE[1](0);
                            CC_SETPOSITION(15, int11, 0, 0);
                            CC_SETPOSITION[1](2, (int11 + 1), 0, 0);
                            int11 = (int11 + 15);
                        } else {
                            CC_SETHIDE(true);
                            CC_SETHIDE[1](true);
                        };
                    } else {
                        CC_SETHIDE(true);
                        CC_SETHIDE[1](true);
                    };
                } else {
                    if (((int10 == 0) || (STRING_INDEXOF_STRING(string0, varclient_2249, 0) != -1))) {
                        int9 = (int9 + 1);
                        if ((varclient_5917 != 1)) {
                            CC_SETOP(2, "Unlock hint");
                            CC_SETCOLOUR(16711680);
                            CC_SETONMOUSELEAVE(callback(script1356, -2147483645, -2147483643, 16711680));
                            CC_SETONOP[1](callback());
                            CC_SETHIDE(0);
                            CC_SETPOSITION(15, int11, 0, 0);
                            CC_SETPOSITION[1](2, (int11 + 1), 0, 0);
                            int11 = (int11 + 15);
                        } else {
                            CC_SETHIDE(true);
                        };
                    } else {
                        CC_SETHIDE(true);
                    };
                    CC_SETHIDE[1](true);
                };
            };
            int7 = cc_getparam(1133);
        } else {
            int7 = -1;
        };
    };
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    while (((int12 < 100) && (varclient_1077 == true))) {
        int13 = script3079(int12);
        if (((int13 != 32767) && (int14 < 100))) {
            int14 = (int14 + 1);
        };
        int12 = (int12 + 1);
    };
    int9 = (int9 + int8);
    IF_SETSCROLLSIZE(167, (5 + int11), int3);
    script72(int4, int3, varclient_88);
    if ((varclient_1077 == true)) {
        IF_SETTEXT(`Playlist: ${inttostring(int14, 10)} / ${inttostring(100, 10)}`, int5);
    } else {
        IF_SETTEXT(`Unlocked: ${TOSTRING_LOCALISED(int8, 1)} / ${TOSTRING_LOCALISED(int9, 1)}`, int5);
    };
    if ((int11 == 5)) {
        IF_SETHIDE(false, int1);
    } else {
        IF_SETHIDE(true, int1);
    };
    return;
}