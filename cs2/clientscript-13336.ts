//
function script13336(int0: int, int1: int): void {
    var int2 = 0;
    var int3 = -1 as struct;
    var string0 = "";
    var int4 = 60;
    var int1 = (int1 * 11);
    if ((CC_FIND(comp(1851, 40), int1) == 1)) {
        int2 = cc_getparam(6430);
        int3 = cc_getparam(6431);
    };
    if ((int2 == -65535)) {
        return;
    };
    var int5 = 0;
    if ((varbitplayer_37059 == 1)) {
        int5 = 1;
        int4 = 35;
    };
    var int6 = (int0 * (int4 + 2));
    var int7 = 7829367;
    var int8 = 7829367;
    switch (int2) {
        case -2: {
            int7 = 16777215;
            int8 = script10495(0);
            break;
        }
        case -1: {
            int7 = script10495(6);
            int8 = script10495(6);
            break;
        }
        case -3: {
            int7 = 7829367;
            int8 = 16355874;
            break;
        }
        default: {
            if ((script12477() < struct_getparam(int3, 7895))) {
                int8 = 16355874;
            } else {
                int8 = 7829367;
            };
            int7 = 7829367;
            break;
        }
    };
    if ((varclient_6831 == int3)) {
        varclient_5992 = int6;
    };
    var string1 = "";
    if ((CC_FIND(comp(1851, 40), int1) == 1)) {
        CC_SETPOSITION(0, int6, 0, 0);
        CC_SETSIZE(0, int4, 1, 0);
        CC_SETFILL(1);
        CC_SETCOLOUR(script10495(12));
        string1 = script8954(int3, int2, "");
        CC_SETONMOUSEREPEAT(callback(script8799, string1, -2147483645, -2147483643));
        if ((struct_getparam(int3, 6427) > -1)) {
            CC_SETONOP(callback(script13342, CC_GETID(), int3));
            CC_SETOP(5, "Open");
            CC_SETOPCURSOR(5, 46);
        };
    };
    var int9 = 0;
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var string2 = "";
    var int14 = struct_getparam(int3, 7895);
    if ((int5 == 1)) {
        if ((CC_FIND(comp(1851, 40), (int1 + 4)) == 1)) {
            CC_SETSIZE(14, 14, 0, 0);
            if ((struct_getparam(int3, 6755) > 0)) {
                CC_SETPOSITION((int9 + 2), (int6 + 2), 0, 0);
            } else {
                CC_SETPOSITION((int9 + 2), (int6 + ((int4 / 2) - (CC_GETHEIGHT() / 2))), 0, 0);
            };
            CC_SETNOCLICKTHROUGH(true);
            if ((int2 == -2)) {
            };
            int10 = (CC_GETX() + CC_GETWIDTH());
        };
        if (((struct_getparam(int3, 6755) > 0) && (CC_FIND(comp(1851, 40), (int1 + 10)) == 1))) {
            CC_SETPOSITION(((int9 + 1) + 2), ((int6 + 14) + (2 * 2)), 0, 0);
            CC_SETSIZE(14, 12, 0, 0);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXT(TOSTRING_LOCALISED(struct_getparam(int3, 6755), 1));
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
        };
        if ((CC_FIND(comp(1851, 40), (int1 + 6)) == 1)) {
            CC_SETPOSITION((int10 + 2), int6, 0, 0);
            CC_SETSIZE(((int10 + (2 * 2)) + 15), int4, 1, 0);
            CC_SETCOLOUR(int7);
            string2 = script13285(int3, 1);
            if (((int2 != -2) && (int14 > script12477()))) {
                string2 = strconcat(string2, ` <col=F99222>Grace period ends: ${script3381(int14)}</col>`);
            };
            CC_SETTEXT(string2);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
        };
        if ((((strcmp(struct_getparam(int3, 6414), "") != 0) || (struct_getparam(int3, 7894) == true)) && (CC_FIND(comp(1851, 40), (int1 + 8)) == 1))) {
            CC_SETPOSITION(2, (int6 + 2), 2, 0);
            CC_SETGRAPHIC(29975 as graphic);
            CC_SETSIZE(14, 14, 0, 0);
            script8955(int3);
            CC_SETMOUSEOVERCURSOR(172);
            CC_SETNOCLICKTHROUGH(true);
            int13 = 1;
        };
        if (((struct_getparam(int3, 6427) > -1) && (CC_FIND(comp(1851, 40), (int1 + 7)) == 1))) {
            CC_SETSIZE(13, 13, 0, 0);
            if ((int13 == 0)) {
                CC_SETPOSITION(2, (int6 + ((int4 / 2) - (CC_GETHEIGHT() / 2))), 2, 0);
            } else {
                CC_SETPOSITION(2, (int6 + (int4 - CC_GETHEIGHT())), 2, 0);
            };
            CC_SETGRAPHIC(30205 as graphic);
        };
    } else {
        if ((CC_FIND(comp(1851, 40), (int1 + 1)) == 1)) {
            CC_SETPOSITION(2, (int6 + 2), 0, 0);
            CC_SETSIZE(28, 28, 0, 0);
            CC_SETGRAPHIC(script13286(int3));
            int9 = (CC_GETX() + CC_GETWIDTH());
        };
        if ((((int2 == -1) || (int2 == -2)) && (CC_FIND(comp(1851, 40), (int1 + 3)) == 1))) {
            CC_SETPOSITION(2, (int6 + 2), 0, 0);
            CC_SETSIZE(28, 28, 0, 0);
            if ((int2 == -2)) {
                CC_SETGRAPHIC(26606 as graphic);
            } else {
                CC_SETGRAPHIC(26605 as graphic);
                if ((CC_FIND[1](comp(1851, 40), (int1 + 2)) == 1)) {
                    CC_SETPOSITION[1](2, (int6 + 2), 0, 0);
                    CC_SETSIZE[1](28, 28, 0, 0);
                    CC_SETFILL[1](1);
                    CC_SETCOLOUR[1](8421504);
                    CC_SETTRANS[1](128);
                };
            };
        };
        if ((CC_FIND(comp(1851, 40), (int1 + 4)) == 1)) {
            CC_SETPOSITION((int9 + 2), int6, 0, 0);
            CC_SETSIZE(14, 14, 0, 0);
            CC_SETNOCLICKTHROUGH(true);
            if ((int2 == -2)) {
            };
            int10 = (CC_GETX() + CC_GETWIDTH());
        };
        if ((CC_FIND(comp(1851, 40), (int1 + 5)) == 1)) {
            CC_SETPOSITION((int10 + 2), int6, 0, 0);
            switch (script13498(struct_getparam(int3, 6417))) {
                case 1: {
                    string0 = strconcat(string0, "Beginner - ");
                    break;
                }
                case 2: {
                    string0 = strconcat(string0, "Easy - ");
                    break;
                }
                case 3: {
                    string0 = strconcat(string0, "Medium - ");
                    break;
                }
                case 4: {
                    string0 = strconcat(string0, "Hard - ");
                    break;
                }
                case 5: {
                    string0 = strconcat(string0, "Elite - ");
                    break;
                }
            };
            string0 = strconcat(string0, script13284(int3));
            CC_SETTEXTSHADOW(true);
            CC_SETTEXT(string0);
            CC_SETSIZE(int10, 15, 1, 0);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETTEXTFONT(55 as fontmetrics);
            CC_SETCOLOUR(int8);
        };
        if ((CC_FIND(comp(1851, 40), (int1 + 6)) == 1)) {
            CC_SETPOSITION((int9 + 2), (int6 + 15), 0, 0);
            CC_SETSIZE((int9 + 13), (int4 - 15), 1, 0);
            CC_SETCOLOUR(int7);
            string2 = script13285(int3, 1);
            if (((int2 != -2) && (int14 > script12477()))) {
                string2 = strconcat(string2, ` <col=f99222>Grace period ends: ${script3381(int14)}</col>`);
            };
            CC_SETTEXT(string2);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(0, 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            int11 = CC_GETY();
            int12 = (CC_GETHEIGHT() / 2);
        };
        if ((CC_FIND(comp(1851, 40), (int1 + 7)) == 1)) {
            CC_SETSIZE(13, 13, 0, 0);
            CC_SETPOSITION(2, (int11 + (int12 - (CC_GETHEIGHT() / 2))), 2, 0);
            if ((struct_getparam(int3, 6427) > -1)) {
                CC_SETGRAPHIC(30205 as graphic);
            };
        };
        if ((((strcmp(struct_getparam(int3, 6414), "") != 0) || (struct_getparam(int3, 7894) == true)) && (CC_FIND(comp(1851, 40), (int1 + 8)) == 1))) {
            CC_SETPOSITION(2, (int6 + 2), 2, 0);
            CC_SETGRAPHIC(29975 as graphic);
            CC_SETSIZE(14, 14, 0, 0);
            script8955(int3);
            CC_SETMOUSEOVERCURSOR(172);
            CC_SETNOCLICKTHROUGH(true);
        };
        if (((CC_FIND(comp(1851, 40), (int1 + 9)) == 1) && (struct_getparam(int3, 6755) > 0))) {
            CC_SETPOSITION((int9 - 15), (((int6 + 2) + 28) - 12), 0, 0);
            CC_SETSIZE(15, 12, 0, 0);
            CC_SETCOLOUR(0);
            CC_SETTRANS(128);
            CC_SETFILL(1);
        };
        if (((CC_FIND(comp(1851, 40), (int1 + 10)) == 1) && (struct_getparam(int3, 6755) > 0))) {
            CC_SETPOSITION((int9 - 15), ((int6 + int9) - 12), 0, 0);
            CC_SETSIZE(14, 12, 0, 0);
            CC_SETCOLOUR(script10495(3));
            CC_SETTEXT(TOSTRING_LOCALISED(struct_getparam(int3, 6755), 1));
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
        };
    };
    return;
}