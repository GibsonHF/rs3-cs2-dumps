//
function script5692(int0: int, int1: int, int2: struct): void {
    CC_CREATE[1](comp(1218, 247), 5, IF_GETNEXTSUBID(comp(1218, 247)));
    CC_SETSIZE[1](36, 32, 0, 0);
    CC_SETPOSITION[1](3, (int1 + 2), 0, 0);
    if ((int2 == -1 as struct)) {
        return;
    };
    var int3 = struct_getparam(int2, 6569);
    var int4 = script14715(int2);
    var int5 = enum_getvalue(0, 17, 681 as cs2enum, script12097(int2));
    var int6 = script12098(int2);
    var int7 = script2553(int2);
    var string0 = script12095(int2);
    var int8 = 0;
    if ((struct_getparam(int2, 5442) == 1)) {
        int8 = 1;
    };
    if ((int4 != -1 as obj)) {
        if ((STRING_LENGTH(string0) < 1)) {
            string0 = OC_NAME(int4);
        };
        if (((((item_getparam(int4, 2640) > 0) && (item_getparam(int4, 2640) != 62)) && (item_getparam(int4, 2641) == 0)) && (item_getparam(int4, 2640) == varclient_1753))) {
            int5 = enum_getvalue(0, 17, 681 as cs2enum, item_getparam(int4, 2640));
            int6 = item_getparam(int4, 2645);
            if ((((((item_getparam(int4, 2639) == true) || (OC_MEMBERS(item_getparam(int4, 2655)) == 1)) || (OC_MEMBERS(item_getparam(int4, 2656)) == 1)) || (OC_MEMBERS(item_getparam(int4, 2650)) == 1)) || (OC_MEMBERS(int4) == 1))) {
                int7 = true;
            };
        };
    };
    if (((int5 != -1 as stat) && (script11863(int5) < int6))) {
        CC_SETSIZE[1](25, 25, 0, 0);
        CC_SETGRAPHIC[1](8277 as graphic);
        CC_SETPOSITION[1](6, (int1 + 5), 0, 0);
        CC_SETONMOUSEOVER[1](callback(script5693, -2147483643, 1));
        CC_SETONMOUSELEAVE[1](callback(script5694));
    } else if ((int4 == -1 as obj)) {
        CC_SETGRAPHIC[1](script12099(int2));
        CC_SETSIZE[1](32, 32, 0, 0);
    } else {
        CC_SETOBJECT[1](int4, -1);
        script14739(int4);
    };
    CC_CREATE[1](comp(1218, 247), 4, IF_GETNEXTSUBID(comp(1218, 247)));
    CC_SETPOSITION[1](35, int1, 0, 0);
    CC_SETTEXTFONT[1](28 as fontmetrics);
    CC_SETTEXTSHADOW[1](true);
    if ((int6 == 0)) {
        CC_SETTEXT[1]("");
    } else {
        CC_SETTEXT[1](inttostring(int6, 10));
    };
    CC_SETCOLOUR[1](14389248);
    CC_SETTEXTALIGN[1](1, 1, 13);
    CC_SETSIZE[1](32, 36, 0, 0);
    if ((int7 == true)) {
        CC_CREATE[1](comp(1218, 247), 4, IF_GETNEXTSUBID(comp(1218, 247)));
        CC_SETPOSITION[1](74, (int1 + 9), 0, 0);
        CC_SETSIZE[1](25, 20, 0, 0);
        CC_SETONMOUSEOVER[1](callback(script5693, -2147483643, 0));
        CC_SETONMOUSELEAVE[1](callback(script5694));
    };
    CC_CREATE[1](comp(1218, 247), 4, IF_GETNEXTSUBID(comp(1218, 247)));
    CC_SETPOSITION[1](105, int1, 0, 0);
    CC_SETTEXT[1](string0);
    if (((strcmp("", struct_getparam(int2, 2216)) != 0) || ((struct_getparam(int2, 6569) != -1 as dbrow) && ((DB_GETROWTABLE(struct_getparam(int2, 6569)) == 5) || (DB_GETROWTABLE(struct_getparam(int2, 6569)) == 94))))) {
        CC_SETSIZE[1](455, 17, 0, 0);
        if ((STRINGWIDTH(string0, 28 as fontmetrics) <= 455)) {
            CC_SETTEXTFONT[1](28 as fontmetrics);
        } else {
            CC_SETTEXTFONT[1](26 as fontmetrics);
        };
        CC_SETMAXLINES[1](1);
    } else {
        CC_SETSIZE[1](455, 36, 0, 0);
        if ((PARAHEIGHT(string0, 455, 28 as fontmetrics) <= 2)) {
            CC_SETTEXTFONT[1](28 as fontmetrics);
        } else {
            CC_SETTEXTFONT[1](26 as fontmetrics);
        };
        CC_SETMAXLINES[1](2);
    };
    CC_SETTEXTSHADOW[1](true);
    CC_SETCOLOUR[1](15122040);
    CC_SETTEXTALIGN[1](1, 1, 12);
    if (((strcmp("", struct_getparam(int2, 4279)) != 0) && (script6431() == true))) {
        script14716(int1, struct_getparam(int2, 4279));
    } else if ((strcmp("", struct_getparam(int2, 2216)) != 0)) {
        script14716(int1, struct_getparam(int2, 2216));
    } else if ((int3 != -1 as dbrow)) {
        switch (DB_GETROWTABLE(int3)) {
            case 5: {
                if ((script12058(int3) == 1)) {
                    script14716(int1, "Discovered");
                } else if ((DB_GETFIELDCOUNT(int3, 20688) > 0)) {
                    script14716(int1, `Also requires: ${script12051(int3, 0)} Technology`);
                };
                break;
            }
            case 94: {
                if ((script14602(int3) == 1)) {
                    script14716(int1, "Ancient power unlocked");
                };
                break;
            }
        };
    };
    if (((int8 == 0) && (int3 != -1 as dbrow))) {
        switch (DB_GETROWTABLE(int3)) {
            case 5:
            case 86:
            case 88:
            case 94:
            case 235: {
                int8 = 1;
                break;
            }
        };
    };
    var int9 = 27845;
    var int10 = 27844;
    if (((STRING_LENGTH(struct_getparam(int2, 2211)) > 0) || (int8 == 1))) {
        CC_CREATE[1](comp(1218, 247), 5, IF_GETNEXTSUBID(comp(1218, 247)));
        CC_SETPOSITION[1](5, (int1 + 8), 2, 0);
        CC_SETGRAPHIC[1](27844 as graphic);
        CC_SETSIZE[1](20, 20, 0, 0);
        CC_SETONMOUSEOVER[1](callback(script5336, -2147483645, -2147483643, int9));
        CC_SETONMOUSELEAVE[1](callback(script5336, -2147483645, -2147483643, int10));
    };
    if ((CC_FIND(comp(1218, 246), int0) == 1)) {
        CC_SETPOSITION(5, int1, 0, 0);
        CC_SETONTIMER(callback());
    };
    return;
}