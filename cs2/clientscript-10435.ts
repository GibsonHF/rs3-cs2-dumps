//
function script10435(int0: number, int1: number, int2: number, int3: number, int4: number, int5: number, int6: number, int7: number, int8: number, int9: number): void {
    var int10 = 96797563;
    var int11 = 96797568;
    var int12 = 96797569;
    var int13 = 96797567;
    var int14 = 96797565;
    var int15 = 96797564;
    var int16 = 96797574;
    var int17 = 96797566;
    SOUND_VORBIS_VOLUME(36961 as vorbis, 1, 0, 120);
    switch (IF_GETTOP()) {
        case 906: {
            int10 = 59375775;
            int11 = 59375780;
            int12 = 59375781;
            int13 = 59375779;
            int14 = 59375777;
            int15 = 59375776;
            int16 = 59375782;
            int17 = 59375778;
            break;
        }
        case 744: {
            int10 = 48759145;
            int11 = 48759150;
            int12 = 48759151;
            int13 = 48759149;
            int14 = 48759147;
            int15 = 48759146;
            int16 = 48759152;
            int17 = 48759148;
            break;
        }
        default: {
            int10 = 96797563;
            int11 = 96797568;
            int12 = 96797569;
            int13 = 96797567;
            int14 = 96797565;
            int15 = 96797564;
            int16 = 96797574;
            int17 = 96797566;
            break;
        }
    };
    if ((((((IF_FIND(int10) == 1) && (cc_getparam(4515) == true)) && (cc_getparam(4516) != comp(-1, 65535))) && (cc_getparam(4516) == int0)) && (cc_getparam(4518) == int1))) {
        script10444();
        return;
    };
    CC_DELETEALL(int11);
    CC_DELETEALL(int12);
    CC_DELETEALL(int13);
    varplayer_4734 = int4;
    varplayer_4735 = int0;
    varplayer_4736 = int1;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 1;
    var int22 = 1;
    var int23 = 0;
    var int24 = 0;
    var int25 = 26;
    var int26 = 26;
    var int27 = 300;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int28 = -1;
    var int29 = -1;
    var int30 = -1;
    var int31 = -1;
    var int32 = -1;
    var int33 = script10082();
    var int34 = -1;
    [int25, int23] = script10433(0);
    [int26, int24] = script10433(1);
    while ((int19 <= int6)) {
        int32 = 5;
        [int22, string0, string1, string2, int34, int29, int30, int31] = script13129(int0, int4, int19, int1);
        CC_CREATE(int11, 4, IF_GETNEXTSUBID(int11));
        cc_setparam(4519, int22);
        if ((int22 == 1)) {
            int21 = script10454(int0, int4, int19);
            if (((int5 != -1 as cs2enum) && (int21 == 0))) {
                string3 = enum_getvalue(0, 36, int5, int19);
                if ((STRING_LENGTH(string3) > 0)) {
                    if ((strcmp(string0, string2) == 0)) {
                        if ((strcmp(SUBSTRING(string3, 0, 1), "*") == 0)) {
                            string0 = `${string0}${SUBSTRING(string3, 1, STRING_LENGTH(string3))}`;
                        } else {
                            string0 = string3;
                        };
                        string2 = string0;
                    } else if ((strcmp(SUBSTRING(string3, 0, 1), "*") == 0)) {
                        string0 = `${string0}${SUBSTRING(string3, 1, STRING_LENGTH(string3))}`;
                    } else {
                        string0 = string3;
                    };
                };
            };
            if ((int9 == 1)) {
                CC_SETPARAM_STRING(5441, LOWERCASE(string0));
                if ((strcmp(string0, string2) == 0)) {
                    string0 = script12292(string0);
                    string2 = string0;
                } else {
                    string0 = script12292(string0);
                };
            };
            CC_SETTEXT(string0);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(0, 1, 0);
            cc_setparam(7128, int21);
            CC_SETMAXLINES(1);
            CC_CREATE[1](int12, 5, IF_GETNEXTSUBID(int12));
            cc_setparam[1](6308, CC_GETID());
            CC_SETPOSITION[1](int32, int20, 0, 0);
            CC_SETSIZE[1](int32, int33, 1, 0);
            CC_SETONMOUSEOVER[1](callback(script10436, int11, CC_GETID()));
            CC_SETONMOUSEREPEAT[1](callback(script10449, int0, int1, string2));
            if ((int30 != -1)) {
                CC_CREATE[1](int12, 5, IF_GETNEXTSUBID(int12));
                cc_setparam[1](6308, CC_GETID());
                if ((int30 == 1)) {
                    CC_SETGRAPHIC[1](29732 as graphic);
                } else {
                    CC_SETGRAPHIC[1](29727 as graphic);
                };
                CC_SETPOSITION[1]((int32 + (int29 * 17)), (int20 + ((int33 - 15) / 2)), 0, 0);
                CC_SETSIZE[1](15, 15, 0, 0);
                CC_SETOP[1](1, "Expand/Collapse");
                CC_SETONOP[1](callback(script13127, int11, CC_GETID(), int4));
            };
            int32 = (int32 + ((int29 + 1) * 17));
            if ((int21 == 1)) {
                CC_SETTEXTFONT(int25);
                CC_SETCOLOUR(int23);
                CC_SETONOP(callback(script10438, -2147483645, -2147483643, int4, int0, int2, int3));
                CC_CREATE[1](int12, 5, IF_GETNEXTSUBID(int12));
                cc_setparam[1](6308, CC_GETID());
                CC_SETPOSITION[1](int32, int20, 0, 0);
                CC_SETSIZE[1](int32, int33, 1, 0);
                CC_SETOP[1](1, "Select");
                CC_SETONOP[1](callback(script13126, int11, CC_GETID()));
            } else {
                CC_SETTEXTFONT(int26);
                CC_SETCOLOUR(int24);
            };
            if ((int31 != -1)) {
                CC_CREATE[1](int12, 5, IF_GETNEXTSUBID(int12));
                cc_setparam[1](6308, CC_GETID());
                if ((int31 == 1)) {
                    CC_SETGRAPHIC[1](20326 as graphic);
                } else if ((int31 == 0)) {
                    CC_SETGRAPHIC[1](20268 as graphic);
                } else {
                    CC_SETGRAPHIC[1](20328 as graphic);
                };
                CC_SETPOSITION[1](int32, (int20 + ((int33 - 14) / 2)), 0, 0);
                CC_SETSIZE[1](14, 14, 0, 0);
                int32 = (int32 + (14 + 2));
            };
            if ((int34 != -1)) {
                CC_CREATE[1](int12, 5, IF_GETNEXTSUBID(int12));
                cc_setparam[1](6308, CC_GETID());
                CC_SETGRAPHIC[1](int34);
                CC_SETPOSITION[1](int32, (int20 + ((int33 - 14) / 2)), 0, 0);
                CC_SETSIZE[1](14, 14, 0, 0);
                int32 = (int32 + (14 + 2));
            };
            CC_SETPOSITION(int32, int20, 0, 0);
            CC_SETSIZE(int32, int33, 1, 0);
            if ((int2 == -1)) {
                int28 = MAX(int28, (int32 + PARAWIDTH(CC_GETTEXT(), 1000, CC_GETFONTMETRICS())));
            };
            if ((strcmp(string1, "") != 0)) {
                CC_CREATE[1](int12, 4, IF_GETNEXTSUBID(int12));
                cc_setparam[1](6308, CC_GETID());
                CC_SETTEXT[1](string1);
                CC_SETPOSITION[1](0, int20, 2, 0);
                CC_SETTEXTSHADOW[1](true);
                CC_SETTEXTALIGN[1](2, 1, 0);
                cc_setparam[1](5928, 2);
                if ((int21 == 1)) {
                    CC_SETTEXTFONT[1](int25);
                    CC_SETCOLOUR[1](int23);
                } else {
                    CC_SETTEXTFONT[1](int26);
                    CC_SETCOLOUR[1](int24);
                };
                CC_SETSIZE[1](STRINGWIDTH(string1, CC_GETFONTMETRICS[1]()), int33, 0, 0);
                if ((int2 == -1)) {
                    int28 = MAX(int28, ((int32 + PARAWIDTH(CC_GETTEXT(), 1000, CC_GETFONTMETRICS())) + PARAWIDTH(CC_GETTEXT[1](), 1000, CC_GETFONTMETRICS[1]())));
                };
            };
            int20 = (int20 + int33);
            if (((int19 == int7) && (script6431() == 0))) {
                script10437(int11, int19);
            };
        } else {
            CC_SETHIDE(true);
            cc_setparam(7128, 0);
        };
        int19 = (int19 + 1);
    };
    int27 = MIN((int20 + 8), int27);
    if ((int28 != -1)) {
        int28 = ((int28 + 16) + (2 * 5));
    };
    int18 = script10440(int0, int1, int27, int28, int8, int4, 0);
    if ((int18 == -1)) {
        CC_DELETEALL(int11);
        [varplayer_4734, varplayer_4735, varplayer_4736] = [-1, -1, -1];
        return;
    };
    script4762(int14, 21336);
    script10409(int15, 21336);
    if ((int9 == 1)) {
        script10441(int4, int6, int7);
    };
    IF_SETPOSITION(0, 4, 0, 0, int17);
    if ((int20 > int18)) {
        IF_SETSIZE(16, 8, 1, 1, int17);
        IF_SETSCROLLSIZE(0, int20, int17);
        script31(int16, int17, 792, 789, 790, 791, 773, 788);
    } else {
        IF_SETSIZE(4, 8, 1, 1, int17);
        IF_SETSCROLLSIZE(0, 0, int17);
        CC_DELETEALL(int16);
    };
    return;
}