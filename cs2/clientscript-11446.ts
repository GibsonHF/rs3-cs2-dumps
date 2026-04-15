//
function script11446(): void {
    var int0 = comp(1624, 2);
    var int1 = comp(1624, 0);
    var int2 = comp(1624, 1);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    script11445();
    IF_SETHIDE(true, comp(1624, 16));
    IF_SETSCROLLSIZE(0, 0, int0);
    IF_SETSCROLLPOS(0, 0, int0);
    switch (varplayer_5425) {
        case 10018: {
            IF_SETHIDE(false, comp(1624, 23));
            break;
        }
        case 10019: {
            IF_SETHIDE(false, comp(1624, 32));
            break;
        }
        case 10020: {
            IF_SETHIDE(false, comp(1624, 41));
            break;
        }
        case 10021: {
            IF_SETHIDE(false, comp(1624, 50));
            break;
        }
    };
    var int3 = ENUM_GETOUTPUTCOUNT(varplayer_5425);
    var int4 = (int3 / 2);
    if ((MODULO(int3, 2) != 0)) {
        int4 = (int4 + 1);
    };
    var int5 = (int4 * (43 + 5));
    var int6 = IF_GETWIDTH(int0);
    if ((int5 >= IF_GETHEIGHT(int0))) {
        int6 = (int6 - 16);
    };
    var int7 = 0;
    var int8 = (int6 / 2);
    var int9 = 5;
    var int10 = 5;
    var int11 = (int8 - (5 * 2));
    var int12 = 43;
    var int13 = -1 as struct;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    var int17 = 0;
    var int18 = 0;
    var string0 = "Buy";
    var string1 = "";
    var int19 = 0;
    var int20 = 0;
    var int21 = 0;
    var int22 = false;
    while ((int7 < int3)) {
        int13 = enum_getvalue(0, 73, varplayer_5425, int7);
        if ((int13 == -1 as struct)) {
            return;
        };
        if (((struct_getparam(int13, 5084) == 0) || ((struct_getparam(int13, 5084) <= varplayer_3079) && ((struct_getparam(int13, 5085) >= varplayer_3079) || (struct_getparam(int13, 5085) == 1))))) {
            script10764(int1, 21361 as struct, int9, int10, int11, int12, -1);
            CC_CREATE(int1, 3, IF_GETNEXTSUBID(int1));
            CC_SETPOSITION(int9, int10, 0, 0);
            CC_SETSIZE(int11, int12, 0, 0);
            string1 = struct_getparam(int13, 5070);
            if ((((struct_getparam(int13, 5084) != 0) && (struct_getparam(int13, 5084) <= varplayer_3079)) && (struct_getparam(int13, 5085) >= varplayer_3079))) {
                [int19, int20, int21] = DATE_RUNEDAY_TODATE(struct_getparam(int13, 5085));
                string1 = strconcat(string1, `<br>This item will be in the store until ${inttostring(int19, 10)} ${enum_getvalue(0, 36, 950 as cs2enum, int20)} ${inttostring(int21, 10)}`);
            };
            if (((struct_getparam(int13, 5086) == 1) && (script4148() == true))) {
                string1 = strconcat(string1, "<br>This reward is not available in Ironman mode.");
            };
            CC_SETONMOUSEREPEAT(callback(script8801, string1, -2147483645, -2147483643, 1, 0, 0));
            CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
            CC_SETPOSITION((int9 + 5), (int10 + 1), 0, 0);
            CC_SETSIZE((int12 - 2), (int12 - 2), 0, 0);
            CC_SETOBJECT_NONUM(struct_getparam(int13, 5067), 5);
            int15 = ((CC_GETX() + CC_GETWIDTH()) + 5);
            int16 = CC_GETWIDTH();
            CC_CREATE(int1, 4, IF_GETNEXTSUBID(int1));
            CC_SETPOSITION(int15, (int10 + 2), 0, 0);
            CC_SETSIZE((((int11 - int16) - 5) - 50), 20, 0, 0);
            CC_SETTEXTFONT(27);
            CC_SETCOLOUR(script693(255, 203, 5));
            if ((strcmp("", struct_getparam(int13, 5066)) != 0)) {
                CC_SETTEXT(struct_getparam(int13, 5066));
            } else {
                CC_SETTEXT(OC_NAME(struct_getparam(int13, 5067)));
            };
            CC_CREATE(int1, 5, IF_GETNEXTSUBID(int1));
            CC_SETSIZE(12, 12, 0, 0);
            CC_SETPOSITION(int15, ((int10 + (int12 - CC_GETHEIGHT())) - 5), 0, 0);
            CC_SETGRAPHIC(20680 as graphic);
            CC_CREATE[1](int1, 4, IF_GETNEXTSUBID(int1));
            CC_SETPOSITION[1](((CC_GETX() + CC_GETWIDTH()) + 5), (int10 + ((int12 - 12) - 5)), 0, 0);
            CC_SETSIZE[1]((((int11 - int16) - 5) - 50), 10, 0, 0);
            CC_SETTEXTFONT[1](26 as fontmetrics);
            CC_SETCOLOUR[1](script693(255, 255, 255));
            if ((((int13 == 31507 as struct) && (varbitplayer_4540 == 1)) || (((int13 == 31508 as struct) && (varbitplayer_4538 == 1)) || (((int13 == 31509 as struct) && (varbitplayer_4539 == 1)) || ((int13 == 31510 as struct) && (varbitplayer_4541 == 1)))))) {
                CC_SETTEXT[1]("0");
            } else {
                CC_SETTEXT[1](inttostring(struct_getparam(int13, 5069), 10));
            };
            string0 = "Buy";
            switch (int13) {
                case 31507: {
                    if ((varbitplayer_4540 == 1)) {
                        string0 = "Re-colour";
                    };
                    break;
                }
                case 31508: {
                    if ((varbitplayer_4538 == 1)) {
                        string0 = "Re-colour";
                    };
                    break;
                }
                case 31509: {
                    if ((varbitplayer_4539 == 1)) {
                        string0 = "Re-colour";
                    };
                    break;
                }
                case 31510: {
                    if ((varbitplayer_4541 == 1)) {
                        string0 = "Re-colour";
                    };
                    break;
                }
            };
            int22 = false;
            if ((struct_getparam(int13, 5086) == 1)) {
                int22 = script4148();
            };
            if ((int22 == false)) {
                int22 = script11447(struct_getparam(int13, 5067));
            };
            if ((struct_getparam(int13, 5634) == 1)) {
                int18 = script10410(int1, int2, 28556 as struct, (int9 + ((int11 - 80) - (5 * 2))), (int10 + ((int12 - 20) - 5)), 80, 20, int18, int22, string0);
                if ((CC_FIND(int2, (int18 - 1)) == 1)) {
                    CC_SETOP(1, "Select");
                    CC_SETOP(2, "Buy 10");
                    CC_SETOP(3, "Buy X");
                    CC_SETOP(4, "Buy Max");
                };
            } else {
                int18 = script10410(int1, int2, 28556 as struct, (int9 + ((int11 - 80) - (5 * 2))), (int10 + ((int12 - 20) - 5)), 80, 20, int18, int22, string0);
            };
            if ((MODULO(++int14, 2) == 0)) {
                int10 = ((int10 + int12) + 5);
                int9 = 5;
            } else {
                int9 = (int8 + 5);
            };
        } else {
            CC_CREATE(int2, 3, int18);
            CC_SETHIDE(true);
            int18 = (int18 + 1);
        };
        int7 = (int7 + 1);
    };
    if ((MODULO(int14, 2) != 0)) {
        int10 = ((int10 + int12) + 5);
    };
    if ((int10 >= IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, int10, int0);
        script7791(comp(1624, 16), int0);
        IF_SETHIDE(false, comp(1624, 16));
    };
    return;
}