//
function script13188(int0: int, int1: int): void {
    var int2 = enum_getvalue(0, 73, 8602 as cs2enum, int0);
    if ((int2 == -1 as struct)) {
        return;
    };
    var int3 = struct_getparam(int2, 6397);
    var int4 = struct_getparam(int2, 6398);
    var int5 = struct_getparam(int2, 6401);
    var int6 = comp(1843, 265);
    var int7 = 0;
    var int8 = IF_GETWIDTH(int6);
    var int9 = 0;
    var string0 = "";
    var int10 = 0;
    var int11 = 0;
    var int12 = -1;
    var int13 = -1;
    var int14 = 0;
    var int15 = -1 as dbrow;
    if ((int0 == 1)) {
        CC_DELETEALL(int6);
        if ((IF_FIND[1](comp(1843, 273)) == 1)) {
            int14 = CC_GETWIDTH[1]();
            int8 = (int8 - ((int14 + 2) * 2));
            CC_CREATE(int6, 4, int9++);
            CC_SETTEXTFONT(58 as fontmetrics);
            CC_SETTEXTSHADOW(true);
            CC_SETPOSITION((int14 + 2), int7, 0, 0);
            CC_SETSIZE((CC_GETX() * 2), enum_getvalue(25, 0, 8549 as cs2enum, CC_GETFONTMETRICS()), 1, 0);
            CC_SETTEXT(script3930("Preview", CC_GETWIDTH(), 1, CC_GETFONTMETRICS()));
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETCOLOUR(script10495(0));
            int7 = (int7 + (CC_GETHEIGHT() + 8));
            CC_SETPOSITION[1](0, 0, 2, 0);
            CC_SETHIDE[1](false);
            if ((IF_FIND[1](comp(1843, 274)) == 1)) {
                CC_SETPOSITION[1](0, (int14 + 2), 2, 0);
                CC_SETHIDE[1](false);
            };
            if ((IF_FIND[1](comp(1843, 281)) == 1)) {
                CC_SETPOSITION[1](0, ((int14 + 2) * 2), 2, 0);
                CC_SETHIDE[1](false);
            };
            if ((IF_FIND[1](comp(1843, 266)) == 1)) {
                CC_SETPOSITION[1](0, 0, 0, 0);
                CC_SETHIDE[1](false);
            };
        };
        CC_CREATE(int6, 4, int9++);
        CC_SETTEXTFONT(29 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        switch (int1) {
            case -4: {
                string0 = "No customisation";
                break;
            }
            case -2: {
                string0 = "No customisation";
                int11 = 1;
                break;
            }
            case -3: {
                string0 = "Hide all";
                int10 = 1;
                int11 = 1;
                break;
            }
            case -1: {
                string0 = "Current outfit";
                int10 = 1;
                break;
            }
            case -5: {
                string0 = "Custom outfit";
                int10 = 1;
                int11 = 1;
                break;
            }
            default: {
                int15 = script15768(int1);
                if ((int15 != -1 as dbrow)) {
                    if ((dbrow_getfield(int15, 667728, 0) == 2)) {
                        if ((dbrow_getfield(int15, 667744, 0) == 20)) {
                            string0 = script18200(int15);
                        } else {
                            string0 = "Custom outfit";
                        };
                        int10 = 1;
                        int11 = 1;
                    } else {
                        return;
                    };
                } else {
                    return;
                };
                break;
            }
        };
        CC_SETTEXT(script3930(string0, int8, 1, CC_GETFONTMETRICS()));
        if ((strcmp(CC_GETTEXT(), string0) != 0)) {
            script14990(2, string0);
        };
        CC_SETPOSITION((int14 + 2), int7, 0, 0);
        CC_SETTEXTALIGN(1, 1, 0);
        CC_SETSIZE((CC_GETX() * 2), script7593(CC_GETTEXT(), int8, CC_GETFONTMETRICS(), 0), 1, 0);
        CC_SETCOLOUR(script10495(2));
        int7 = (int7 + (CC_GETHEIGHT() + 8));
        if ((IF_FIND(comp(1843, 324)) == 1)) {
            if ((int10 == 1)) {
                CC_SETHIDE(true);
            } else {
                CC_SETHIDE(false);
            };
        };
        if ((IF_FIND(comp(1843, 287)) == 1)) {
            if ((int1 == -3)) {
                CC_SETHIDE(false);
            } else {
                CC_SETHIDE(true);
            };
        };
        if (((IF_FIND(comp(1843, 280)) == 1) && (IF_FIND[1](comp(1843, 310)) == 1))) {
            if ((int11 == 1)) {
                CC_SETHIDE(true);
                CC_SETHIDE[1](true);
            } else {
                CC_SETHIDE(false);
                CC_SETHIDE[1](false);
            };
        };
    } else if (((((int1 > -1) && (int3 != comp(-1, 65535))) && (IF_FIND(int3) == 1)) && (int1 == cc_getparam(6361)))) {
        cc_setparam(6360, int1);
        if ((int4 != comp(-1, 65535))) {
            IF_SETHIDE(false, int4);
        };
        script6505(int5);
        script13145(struct_getparam(int2, 6399), int4);
    };
    return;
}