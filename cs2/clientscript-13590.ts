//
function script13590(int0: unknown_int, int1: unknown_int): void {
    if ((script12082() == 0)) {
        return;
    };
    var int2 = comp(1894, 17);
    var int3 = comp(1894, 16);
    var int4 = comp(1894, 18);
    var int5 = comp(1894, 19);
    var int6 = comp(1894, 20);
    var int7 = comp(1894, 24);
    var int8 = comp(1894, 25);
    var int9 = comp(1894, 4);
    var int10 = comp(1894, 5);
    var int11 = comp(1894, 30);
    var int12 = comp(1894, 31);
    var int13 = comp(1894, 7);
    var int14 = comp(1894, 11);
    var int15 = comp(1894, 12);
    var int16 = comp(1894, 21);
    var int17 = comp(1894, 32);
    var int18 = comp(1894, 37);
    var int19 = comp(1894, 41);
    var int20 = 124125224;
    if ((int1 == 1)) {
        int2 = comp(1895, 17);
        int3 = comp(1895, 18);
        int4 = comp(1895, 19);
        int5 = comp(1895, 20);
        int6 = comp(1895, 21);
        int7 = comp(1895, 25);
        int8 = comp(1895, 26);
        int9 = comp(1895, 5);
        int10 = comp(1895, 6);
        int11 = comp(1895, 30);
        int12 = comp(1895, 31);
        int13 = comp(1895, 8);
        int14 = comp(1895, 12);
        int15 = comp(1895, 13);
        int16 = comp(1895, 22);
        int17 = comp(1895, 33);
        int18 = comp(1895, 38);
        int19 = comp(1895, 42);
        int20 = 124190761;
    };
    var string0 = "";
    if ((int0 == 1)) {
        script10416(int7, int8, "", "", "", (1 - MIN(varbitplayer_48342, 1)));
        script10416(int11, int12, "", "", "", (1 - MIN(varbitplayer_48343, 1)));
        if (((script15532(0) == 1) || (script8042() == 1))) {
            IF_SETTEXT("Skip Tutorial", int19);
            string0 = "Reset/skip introduction path in Burthorpe.";
        } else {
            IF_SETTEXT(enum_getvalue(0, 36, 15493 as cs2enum, varplayer_8729), int19);
            string0 = "Next Book of Paths";
        };
        stack(enum_getvalue(0, 23, 15494 as cs2enum, varplayer_8729));
        stack(int20);
        IF_SETGRAPHIC();
        IF_SETONMOUSEREPEAT(callback(script3876, string0, -2147483645, -2147483643), int18);
    };
    var int21 = IF_GETPARENTLAYER(int2);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    CC_DELETEALL(int4);
    CC_DELETEALL(int5);
    IF_SETSCROLLSIZE(0, 0, int21);
    CC_DELETEALL(int6);
    IF_SETHIDE(true, int6);
    var int22 = script10495(0);
    var int23 = script10495(3);
    IF_SETHIDE(false, int9);
    IF_SETHIDE(false, int10);
    IF_SETHIDE(false, int13);
    IF_SETHIDE(false, int16);
    [varclient_6261, varclient_6262] = script13588(script8221());
    script10428(int9, int10, script8221(), -1, struct_getparam(44034 as struct, 8073), varplayer_7123, 0);
    var int24 = 0;
    if ((varplayer_7123 == 0)) {
        IF_SETHIDE(true, int17);
        IF_SETHIDE(false, int18);
        if ((varbitplayer_38842 == 0)) {
            CC_CREATE[1](int2, 4, IF_GETNEXTSUBID(int2));
            CC_SETSIZE[1](10, 50, 1, 0);
            CC_SETPOSITION[1](10, int24, 0, 0);
            CC_SETTEXTFONT[1](26 as fontmetrics);
            CC_SETCOLOUR[1](int23);
            CC_SETTEXTSHADOW[1](true);
            CC_SETTEXTALIGN[1](1, 1, 0);
            CC_SETTEXT[1]("Following a path can break up your objectives into achievable steps, and help guide you towards reaching your goals.");
            CC_SETMAXLINES[1](3);
            int24 = (int24 + (CC_GETHEIGHT[1]() + 2));
        };
        CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
        CC_SETSIZE(80, 16, 0, 0);
        CC_SETPOSITION(10, int24, 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(4));
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXT("Paths Completed");
        CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
        CC_SETSIZE(10, 16, 1, 0);
        CC_SETPOSITION(0, int24, 2, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(script10495(4));
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(2, 0, 0);
        CC_SETTEXT(`${TOSTRING_LOCALISED(varclient_6261, 1)}/${TOSTRING_LOCALISED((varclient_6262 - 1), 1)}`);
        IF_SETHIDE(false, int13);
        int24 = (int24 + 16);
        IF_SETPOSITION(10, int24, 0, 0, int13);
        IF_SETSIZE(10, IF_GETHEIGHT(int13), 1, 0, int13);
        if ((int0 == 1)) {
            script13310(int14, int15, 48, (8 * 1000));
        };
        if ((((varplayer_7125 > 0) || (varplayer_7126 > 0)) || (varplayer_7127 > 0))) {
            CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
            CC_SETSIZE(10, 22, 1, 0);
            int24 = (int24 + (IF_GETHEIGHT(int13) + 2));
            CC_SETPOSITION(10, int24, 0, 0);
            CC_SETTEXTFONT(28 as fontmetrics);
            CC_SETCOLOUR(int22);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETTEXT("Recommended Paths");
            int24 = script8953(int2, int3, 10, int24);
        };
        if ((++int24 > IF_GETHEIGHT(int21))) {
            IF_SETSCROLLSIZE(0, int24, int21);
            IF_SETHIDE(false, int6);
            script7791(int6, int21);
        };
        return;
    };
    IF_SETHIDE(true, int13);
    IF_SETHIDE(true, int18);
    IF_SETHIDE(false, int17);
    var int25 = 0;
    var int26 = enum_getvalue(0, 73, script8221(), varplayer_7123);
    var int27 = struct_getparam(int26, 8072);
    var int28 = ENUM_GETOUTPUTCOUNT(int27);
    var int29 = 0;
    define_array(int28);
    var int30 = 0;
    while ((int25 < int28)) {
        int26 = enum_getvalue(0, 73, int27, int25);
        int30 = script13280(int26);
        switch (int30) {
            case -2: {
                if ((varbitplayer_48342 == 0)) {
                    pop_array(int29, int25);
                    int29 = (int29 + 1);
                };
                break;
            }
            case -1: {
                if ((varbitplayer_48343 == 0)) {
                    pop_array(int29, int25);
                    int29 = (int29 + 1);
                };
                break;
            }
            default: {
                pop_array(int29, int25);
                int29 = (int29 + 1);
                break;
            }
        };
        int25 = (int25 + 1);
    };
    int26 = -1 as struct;
    int25 = 0;
    if ((int29 == 0)) {
        return;
    };
    var int31 = 0;
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var int32 = -1;
    var string4 = "";
    var int33 = 0;
    var int34 = 0;
    var int35 = 0;
    var int36 = 0;
    var int37 = 0;
    var int38 = 0;
    var int39 = script6431();
    var int40 = 0;
    int25 = 0;
    while ((int25 < int29)) {
        int26 = enum_getvalue(0, 73, int27, push_array(int25));
        int31 = script13280(int26);
        [int22, int23] = script13592(int31, int26);
        string1 = "";
        string3 = "";
        int32 = -1;
        string4 = "";
        int34 = ((IF_GETWIDTH(int2) - 40) - 24);
        int36 = (IF_GETWIDTH(int2) - 8);
        int35 = 30;
        int37 = 30;
        string1 = script13285(int26, 1);
        string2 = script8954(int26, int31, "");
        int35 = script7593(string1, int34, 26 as fontmetrics, 0);
        if ((int35 < 40)) {
            int35 = 40;
        };
        int37 = script7593(string2, int36, 26 as fontmetrics, 0);
        int33 = (((((((2 + 16) + int35) + 2) + int37) + 4) + 2) + 4);
        CC_CREATE(int2, 3, IF_GETNEXTSUBID(int2));
        CC_SETPOSITION(0, int38, 0, 0);
        CC_SETSIZE(0, int33, 1, 0);
        CC_SETFILL(1);
        CC_SETCOLOUR(script10495(12));
        CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
        CC_SETSIZE(0, 16, 1, 0);
        CC_SETPOSITION(5, (int38 + 3), 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(int22);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXT(script13575(script13284(int26), CC_GETWIDTH(), CC_GETFONTMETRICS(), 1));
        CC_CREATE(int5, 5, int25);
        CC_SETHIDE(true);
        [string3, string4, int32, int40] = script8950(int26, int39);
        if ((int32 != -1)) {
            CC_SETSIZE(19, 19, 0, 0);
            CC_SETPOSITION(4, (int38 + 2), 2, 0);
            if (((varplayer_7124 > 0) && (varplayer_7124 == struct_getparam(int26, 6413)))) {
                if ((struct_getparam(int26, 1345) > 0)) {
                    CC_SETGRAPHIC(struct_getparam(34085 as struct, 3496));
                } else if ((struct_getparam(int26, 1346) > 0)) {
                    CC_SETGRAPHIC(struct_getparam(21287 as struct, 3496));
                } else if ((int40 == 1)) {
                    CC_SETGRAPHIC(struct_getparam(37398 as struct, 3496));
                } else if ((struct_getparam(int26, 1282) != -1 as coordgrid)) {
                    CC_SETGRAPHIC(struct_getparam(38581 as struct, 3496));
                };
            } else if ((struct_getparam(int26, 1345) > 0)) {
                CC_SETGRAPHIC(struct_getparam(34085 as struct, 3497));
            } else if ((struct_getparam(int26, 1346) > 0)) {
                CC_SETGRAPHIC(struct_getparam(21287 as struct, 3497));
            } else if ((int40 == 1)) {
                CC_SETGRAPHIC(struct_getparam(37398 as struct, 3497));
            } else if ((struct_getparam(int26, 1282) != -1 as coordgrid)) {
                CC_SETGRAPHIC(struct_getparam(38581 as struct, 3497));
            };
            CC_SETOP(1, string3);
            CC_SETOPCURSOR(1, int32);
            CC_SETONMOUSEREPEAT(callback(script3876, string4, -2147483645, -2147483643));
            CC_SETNOCLICKTHROUGH(1);
            CC_SETHIDE(0);
        };
        CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
        CC_SETSIZE(40, 40, 0, 0);
        CC_SETPOSITION(4, (int38 + 20), 0, 0);
        CC_SETGRAPHIC(script13286(int26));
        if (((int31 == -1) || (int31 == -2))) {
            CC_CREATE(int2, 5, IF_GETNEXTSUBID(int2));
            CC_SETSIZE(40, 40, 0, 0);
            CC_SETPOSITION(4, (int38 + 20), 0, 0);
            CC_SETGRAPHIC(script3561(int31));
        };
        CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
        CC_SETSIZE(int34, int35, 0, 0);
        CC_SETPOSITION(50, ((int38 + 16) + 2), 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(int23);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXT(string1);
        CC_CREATE(int2, 4, IF_GETNEXTSUBID(int2));
        CC_SETSIZE(int36, int37, 0, 0);
        CC_SETPOSITION(4, (((((int38 + 16) + 2) + int35) + 4) + 2), 0, 0);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETCOLOUR(int23);
        CC_SETTEXTSHADOW(true);
        CC_SETTEXTALIGN(0, 0, 0);
        CC_SETTEXT(string2);
        CC_CREATE(int4, 4, int25);
        CC_SETSIZE(0, int33, 1, 0);
        CC_SETPOSITION(0, int38, 0, 0);
        [string3, string4, int32] = script8951(int26, int39);
        if ((int32 != -1)) {
            CC_SETOP(1, string3);
            CC_SETOPCURSOR(1, int32);
            CC_SETONMOUSEREPEAT(callback(script3876, string4, -2147483645, -2147483643));
        };
        if (((varplayer_7124 > 0) && (varplayer_7124 == struct_getparam(int26, 6413)))) {
            CC_CREATE(int2, 3, IF_GETNEXTSUBID(int2));
            CC_SETPOSITION(0, int38, 0, 0);
            CC_SETSIZE(1, int33, 1, 0);
            CC_SETFILL(0);
            CC_SETCOLOUR(script10495(0));
        };
        int38 = ((int38 + int33) + 2);
        int25 = (int25 + 1);
    };
    if ((int38 > IF_GETHEIGHT(int21))) {
        IF_SETSCROLLSIZE(0, int38, int21);
        if ((int2 == comp(1895, 17))) {
            if ((varplayer_7129 == 0)) {
                IF_SETSCROLLPOS(0, 0, int21);
                varplayer_7129 = 1;
            };
        } else if ((varplayer_7128 == 0)) {
            IF_SETSCROLLPOS(0, 0, int21);
            varplayer_7128 = 1;
        };
        IF_SETHIDE(false, int6);
        script7791(int6, int21);
    };
    return;
}