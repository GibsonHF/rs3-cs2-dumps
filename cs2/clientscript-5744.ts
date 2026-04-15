//
function script5744(int0: component): void {
    var int1 = script10495(9);
    var int2 = script10495(12);
    var int3 = script10495(16);
    var int4 = script10495(11);
    var int5 = script10495(14);
    var int6 = script10495(4);
    var int7 = 5;
    var int8 = 0;
    var int9 = 0;
    var int10 = 0;
    var int11 = IF_GETWIDTH(int0);
    var int12 = 0;
    var int13 = 0;
    var int14 = -1 as struct;
    var string0 = "null";
    var string1 = "null";
    var int15 = IF_GETNEXTSUBID(int0);
    var int16 = -1 as cs2enum;
    var int17 = 0;
    var int18 = 0;
    var int19 = 0;
    var int20 = 0;
    var int21 = 28;
    var int22 = 0;
    var int23 = -2;
    while ((int10++ < 3)) {
        int14 = script5750(int10);
        [int12, int13] = script5752(int10);
        int8 = int7;
        CC_CREATE(int0, 3, int15);
        CC_SETPOSITION(0, int9, 0, 0);
        CC_SETFILL(1);
        CC_SETOP(1, "Select");
        CC_SETONMOUSEOVER(callback(script15920, 1, -2147483645, -2147483643, 122355713));
        CC_SETONMOUSELEAVE(callback(script15920, 0, -2147483645, -2147483643, 122355713));
        if (((int10 - 1) == 0)) {
            CC_SETCOLOUR(int2);
        } else {
            CC_SETCOLOUR(int1);
        };
        int15 = (int15 + 1);
        CC_CREATE[1](int0, 4, int15);
        CC_SETTEXT[1](struct_getparam(int14, 2232));
        CC_SETSIZE[1](10, script7593(CC_GETTEXT[1](), (int11 - 10), 26 as fontmetrics, 0), 1, 0);
        CC_SETPOSITION[1](5, (int9 + int8), 0, 0);
        switch (int10) {
            case 1: {
                CC_SETCOLOUR[1](13467442);
                cc_setparam(6804, 1);
                break;
            }
            case 2: {
                CC_SETCOLOUR[1](12632256);
                cc_setparam(6804, 2);
                break;
            }
            case 3: {
                CC_SETCOLOUR[1](16766720);
                cc_setparam(6804, 3);
                break;
            }
        };
        CC_SETTEXTSHADOW[1](true);
        CC_SETTEXTALIGN[1](1, 1, 0);
        CC_SETTEXTFONT[1](26 as fontmetrics);
        int8 = (int8 + (script7593(CC_GETTEXT[1](), (int11 - 10), 26 as fontmetrics, 0) + int7));
        int15 = (int15 + 1);
        CC_CREATE[1](int0, 4, int15);
        CC_SETTEXT[1](struct_getparam(int14, 6449));
        CC_SETSIZE[1](10, script7593(CC_GETTEXT[1](), (int11 - 10), 27 as fontmetrics, 0), 1, 0);
        CC_SETPOSITION[1](5, (int9 + int8), 0, 0);
        CC_SETCOLOUR[1](int6);
        CC_SETTEXTSHADOW[1](true);
        CC_SETTEXTALIGN[1](1, 1, 0);
        CC_SETTEXTFONT[1](27 as fontmetrics);
        int8 = (int8 + (script7593(CC_GETTEXT[1](), (int11 - 10), 27 as fontmetrics, 0) + int7));
        int16 = struct_getparam(int14, 6464);
        if ((int16 != -1 as cs2enum)) {
            int18 = ENUM_GETOUTPUTCOUNT(struct_getparam(int14, 6464));
        };
        if ((int18 > 0)) {
            int17 = 0;
            while ((int17 < int18)) {
                int15 = (int15 + 1);
                int19 = (int17 / 4);
                int20 = MIN((int18 - (int19 * 4)), 4);
                int22 = ((int9 + int8) + (int19 * (int21 + int7)));
                int23 = enum_getvalue(0, 0, int16, int17);
                CC_CREATE[1](int0, 5, int15);
                CC_SETSIZE[1](int21, int21, 0, 0);
                if ((int23 == -1)) {
                    CC_SETGRAPHIC[1](29423 as graphic);
                    script14928("<col=1bb3f9>Random</col><br>A random mutator will be selected for this challenge.");
                } else {
                    CC_SETGRAPHIC[1](struct_getparam(enum_getvalue(0, 73, 12533 as cs2enum, int23), 6504));
                    script14928(script13633(int23));
                };
                switch (MODULO(int17, 4)) {
                    case 0: {
                        switch (int20) {
                            case 1: {
                                CC_SETPOSITION[1](0, int22, 1, 0);
                                break;
                            }
                            case 2: {
                                CC_SETPOSITION[1]((0 - (int11 / 8)), int22, 1, 0);
                                break;
                            }
                            case 3: {
                                CC_SETPOSITION[1]((0 - (int11 / 3)), int22, 1, 0);
                                break;
                            }
                            case 4: {
                                CC_SETPOSITION[1]((0 - ((3 * int11) / 8)), int22, 1, 0);
                                break;
                            }
                        };
                        break;
                    }
                    case 1: {
                        switch (int20) {
                            case 2: {
                                CC_SETPOSITION[1]((int11 / 8), int22, 1, 0);
                                break;
                            }
                            case 3: {
                                CC_SETPOSITION[1](0, int22, 1, 0);
                                break;
                            }
                            case 4: {
                                CC_SETPOSITION[1]((0 - (int11 / 8)), int22, 1, 0);
                                break;
                            }
                        };
                        break;
                    }
                    case 2: {
                        switch (int20) {
                            case 3: {
                                CC_SETPOSITION[1]((int11 / 3), int22, 1, 0);
                                break;
                            }
                            case 4: {
                                CC_SETPOSITION[1]((int11 / 8), int22, 1, 0);
                                break;
                            }
                        };
                        break;
                    }
                    case 3: {
                        switch (int20) {
                            case 4: {
                                CC_SETPOSITION[1](((3 * int11) / 8), int22, 1, 0);
                                break;
                            }
                        };
                        break;
                    }
                };
                int17 = (int17 + 1);
            };
            int8 = (((int22 + int21) + int7) - int9);
        };
        int15 = (int15 + 1);
        CC_CREATE[1](int0, 4, int15);
        switch (int10) {
            case 1: {
                CC_SETTEXT[1](`${TOSTRING_LOCALISED(250000, 1)} anima`);
                if ((varbitplayer_35817 == 1)) {
                    CC_SETTEXT[1](`<str>${CC_GETTEXT[1]()}</str>`);
                    script14928("You have already claimed the reward for this challenge this week.");
                } else {
                    script14928("The amount of anima you will gain for completing this challenge.");
                };
                break;
            }
            case 2: {
                CC_SETTEXT[1](`${TOSTRING_LOCALISED(1000000, 1)} anima`);
                if ((varbitplayer_35818 == 1)) {
                    CC_SETTEXT[1](`<str>${CC_GETTEXT[1]()}</str>`);
                    script14928("You have already claimed the reward for this challenge this week.");
                } else {
                    script14928("The amount of anima you will gain for completing this challenge.");
                };
                break;
            }
            case 3: {
                CC_SETTEXT[1](`${TOSTRING_LOCALISED(7500000, 1)} anima`);
                if ((varbitplayer_35819 == 1)) {
                    CC_SETTEXT[1](`<str>${CC_GETTEXT[1]()}</str>`);
                    script14928("You have already claimed the reward for this challenge this week.");
                } else {
                    script14928("The amount of anima you will gain for completing this challenge.");
                };
                break;
            }
        };
        CC_SETSIZE[1](10, script7593(CC_GETTEXT[1](), (int11 - 10), 26 as fontmetrics, 0), 1, 0);
        CC_SETPOSITION[1](5, (int9 + int8), 0, 0);
        CC_SETCOLOUR[1](int6);
        CC_SETTEXTSHADOW[1](true);
        CC_SETTEXTALIGN[1](1, 1, 0);
        CC_SETTEXTFONT[1](26 as fontmetrics);
        int8 = (int8 + (script7593(CC_GETTEXT[1](), (int11 - 10), 26 as fontmetrics, 0) + int7));
        CC_SETSIZE(0, int8, 1, 0);
        cc_setparam(6805, (int15 + 1));
        int15 = (int15 + 1);
        CC_CREATE(int0, 3, int15);
        CC_SETSIZE(0, int8, 1, 0);
        CC_SETPOSITION(0, int9, 0, 0);
        CC_SETFILL(0);
        CC_SETCOLOUR(16764170);
        CC_SETHIDE(true);
        int9 = (int9 + (int8 + int7));
        int8 = 0;
        int18 = 0;
        int15 = (int15 + 1);
    };
    script3536("Please select a challenge first", comp(1867, 53), -1);
    IF_SETHIDE(true, comp(1867, 52));
    IF_SETHIDE(false, comp(1867, 53));
    if (((int9 - 3) > IF_GETHEIGHT(comp(1867, 7)))) {
        IF_SETSCROLLSIZE(0, int9, comp(1867, 7));
        IF_SETSCROLLPOS(0, 0, comp(1867, 7));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1867, 7));
        IF_SETSCROLLPOS(0, 0, comp(1867, 7));
    };
    script7791(comp(1867, 3), comp(1867, 7));
    return;
}