//
function script8502(int0: int, int1: int, int2: int): void {
    var int3 = script8552(int0);
    if ((int3 == comp(-1, 65535))) {
        return;
    };
    var int4 = CHAT_GETNEXTUID(int1);
    if ((int4 == -1)) {
        if ((((int1 == 0) && (int2 == 0)) || (int1 < int2))) {
            script84(int0);
        };
        return;
    };
    var int5 = 0;
    var int6 = 0;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    var string3 = "";
    var string4 = "";
    var int7 = -1 as chatphrase;
    var string5 = "";
    var int8 = -1;
    var int9 = -1;
    stack(unk11059(int4));
    [int5, string0, int6, string1, string2, string3, string4, int7, string5, int8, int9] = stack();
    var int10 = 0;
    define_array(147);
    while ((int4 <= int2)) {
        if ((int5 != -1)) {
            if (((int6 == 100) && ((((int5 == 125) || (int5 == 137)) || (int5 == 138)) || (int5 == 139)))) {
                varclient_5882 = 1;
                script15210(4);
            };
            if (((script8507(int0, int5, 0, int9) == 1) && (script8508(int0, int5, int6, string2, int8, int9) == 1))) {
                int10 = (int10 + 1);
            } else if ((push_array(int5) != 1)) {
                script8538(int0, int5, int6, string2, int8, int9);
                pop_array(int5, 1);
            };
        };
        int4 = CHAT_GETNEXTUID(int4);
        if ((int4 != -1)) {
            stack(unk11059(int4));
            [int5, string0, int6, string1, string2, string3, string4, int7, string5, int8, int9] = stack();
        } else {
            int4 = (int2 + 1);
        };
    };
    if ((int10 == 0)) {
        return;
    };
    int4 = (int4 - 1);
    var int11 = IF_GETNEXTSUBID(int3);
    var int12 = MIN(200, (int11 + int10));
    var int13 = script3873();
    var int14 = enum_getvalue(0, 25, 1649 as cs2enum, int13);
    var int15 = script11432(int14);
    var int16 = enum_getvalue(0, 0, 1648 as cs2enum, int13);
    var int17 = enum_getvalue(0, 0, 1648 as cs2enum, int13);
    while ((int11 < int12)) {
        CC_CREATE(int3, 4, int11);
        CC_SETTEXTFONT(int14);
        CC_SETTEXTALIGN(0, 0, int15);
        CC_SETTEXTSHADOW(true);
        int11 = (int11 + 1);
    };
    int11 = MIN(200, (int11 - 1));
    while ((int11 >= int10)) {
        if (((CC_FIND[1](int3, int11) == 1) && (CC_FIND(int3, (int11 - int10)) == 1))) {
            CC_SETTEXT[1](CC_GETTEXT());
            CC_SETCOLOUR[1](CC_GETCOLOUR());
            CC_SETOPBASE[1](CC_GETOPBASE());
            CC_SETOP[1](1, CC_GETOP(1));
            CC_SETOP[1](2, CC_GETOP(2));
            CC_SETOP[1](3, CC_GETOP(3));
            CC_SETOP[1](4, CC_GETOP(4));
            CC_SETOP[1](5, CC_GETOP(5));
            CC_SETOP[1](6, CC_GETOP(6));
            CC_SETOP[1](7, CC_GETOP(7));
            CC_SETOP[1](8, CC_GETOP(8));
            CC_SETOP[1](9, CC_GETOP(9));
            CC_SETOP[1](10, CC_GETOP(10));
            CC_SETOPCURSOR[1](1, -1);
            CC_SETOPCURSOR[1](2, -1);
            CC_SETOPCURSOR[1](3, -1);
            CC_SETOPCURSOR[1](4, -1);
            CC_SETOPCURSOR[1](5, -1);
            CC_SETOPCURSOR[1](6, -1);
            CC_SETOPCURSOR[1](7, -1);
            CC_SETOPCURSOR[1](8, -1);
            CC_SETOPCURSOR[1](9, -1);
            CC_SETOPCURSOR[1](10, -1);
            cc_setparam[1](3443, cc_getparam(3443));
            CC_SETONOP[1](callback(script86, int0, -2147483644, -2147483643));
            stack(unk11059(cc_getparam(3443)));
            [int5, string0, int6, string1, string2, string3, string4, int7, string5, int8, int9] = stack();
            script10488(int5, string3, int9);
            if ((int0 == 1019)) {
                script3927(1019);
            };
        };
        if ((CC_FIND(int3, int11) == 1)) {
            script16610(int5, int6);
        };
        int11 = (int11 - 1);
    };
    var int18 = script4467();
    var int19 = script1891();
    var int20 = IF_GETWIDTH(int3);
    var int21 = 0;
    int11 = 0;
    stack(unk11059(int4));
    [int5, string0, int6, string1, string2, string3, string4, int7, string5, int8, int9] = stack();
    var int22 = script6431();
    var int23 = IF_GETTRANS(comp(137, 2));
    if ((IF_GETHIDE(comp(276, 27)) == false)) {
        int23 = 0;
    };
    var int24 = 2;
    if (((int22 == true) && (varbitplayer_29940 == 0))) {
        int24 = 0;
    };
    while (((int11 < int10) && (int4 <= int2))) {
        if ((((int5 != -1) && (script8507(int0, int5, 0, int9) == 1)) && (script8508(int0, int5, int6, string2, int8, int9) == 1))) {
            if ((CC_FIND(int3, int11) == 1)) {
                script8505(int5, string5, int6, string1, string4, int9, int7, string0);
                script8506(int0, int5, string5, int6, string1, string2, int7, int18, int19, int9);
                script16610(int5, int6);
                cc_setparam(3443, int4);
                CC_SETSIZE(0, (PARAHEIGHT(CC_GETTEXT(), int20, CC_GETFONTMETRICS()) * int15), 1, 0);
                CC_SETPOSITION(0, int17, 0, int24);
                int17 = (int17 + CC_GETHEIGHT());
                if ((int22 == true)) {
                    CC_SETTRANS(int23);
                    int17 = (int17 + 4);
                };
                script10487(int5, string3, int9);
                switch (int5) {
                    case 3:
                    case 6:
                    case 7:
                    case 18:
                    case 19: {
                        varclient_2505 = REMOVETAGS(string2);
                        break;
                    }
                };
            };
            if (((int5 != 109) && (int5 != 143))) {
                int21 = (int21 + 1);
            };
            int11 = (int11 + 1);
        };
        int4 = unk11136(int4);
        if ((int4 != -1)) {
            stack(unk11059(int4));
            [int5, string0, int6, string1, string2, string3, string4, int7, string5, int8, int9] = stack();
        } else {
            int4 = int2;
        };
    };
    var int25 = (int17 - int16);
    var int26 = 0;
    var int27 = 0;
    var int28 = 0;
    [int26, int27, int28] = script8548(int0);
    if ((((int26 - int27) != int28) && (int27 != 0))) {
        script8549(int0, int26, (int27 - int25), int28);
    };
    int17 = script8503(int3, int11, int17);
    script8504(int0, int17);
    return;
}