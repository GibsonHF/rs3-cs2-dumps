//
function script10801(): void {
    script11661(varplayer_5739, 0);
    var int0 = comp(1562, 2);
    var int1 = comp(1562, 0);
    var int2 = comp(1562, 1);
    script10809();
    script10810();
    script11663();
    script10811();
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    if ((varplayer_5006 == -1 as struct)) {
        return;
    };
    var int3 = struct_getparam(varplayer_5006, 4419);
    if ((int3 == -1 as struct)) {
        int3 = varplayer_5006;
    };
    var int4 = -1 as obj;
    var string0 = "";
    if ((varplayer_6628 != -1 as struct)) {
        int4 = struct_getparam(varplayer_6628, 6140);
        if ((int4 != -1 as obj)) {
            if ((script13032() == 40974 as struct)) {
                string0 = `Currency Pack (Contains ${inttostring(script12870(struct_getparam(varplayer_5006, 6405), varplayer_6628), 10)}Currency)`;
            } else {
                string0 = OC_NAME(int4);
                if ((STRING_LENGTH(string0) > 0)) {
                    string0 = `${string0} (x${inttostring(script12870(struct_getparam(varplayer_5006, 6405), varplayer_6628), 10)})`;
                };
            };
        };
    } else if ((varplayer_9528 != -1 as dbrow)) {
        int4 = script15145(varplayer_9528);
        if ((int4 != -1 as obj)) {
            string0 = OC_NAME(int4);
            if ((STRING_LENGTH(string0) > 0)) {
                string0 = `${string0} (x${inttostring(item_getparam(struct_getparam(varplayer_5006, 6405), 6168), 10)})`;
            };
        };
    };
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = (IF_GETWIDTH(int0) - (2 * int6));
    var int9 = 29 as fontmetrics;
    CC_CREATE(int0, 4, int5);
    CC_SETTEXTFONT(int9);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETPOSITION(int6, int7, 0, 0);
    CC_SETCOLOUR(script10495(1));
    CC_SETTEXT(script11659(int3, 0));
    CC_SETSIZE((int6 * 2), script7593(CC_GETTEXT(), int8, CC_GETFONTMETRICS(), 0), 1, 0);
    int7 = ((int7 + CC_GETHEIGHT()) + int6);
    int5 = (int5 + 1);
    var int10 = 26 as fontmetrics;
    CC_CREATE(int0, 4, int5);
    var int11 = int5;
    CC_SETTEXTFONT(int10);
    CC_SETTEXTALIGN(0, 0, 0);
    CC_SETPOSITION(int6, int7, 0, 0);
    CC_SETCOLOUR(script10495(3));
    int7 = ((int7 + CC_GETHEIGHT()) + int6);
    int5 = (int5 + 1);
    CC_CREATE(int0, 4, int5);
    var int12 = int5;
    CC_SETTEXTFONT(int9);
    CC_SETTEXTALIGN(0, 2, 0);
    CC_SETPOSITION(int6, int6, 0, 2);
    CC_SETCOLOUR(script10495(2));
    int5 = (int5 + 1);
    int5 = 0;
    int6 = 2;
    int7 = 0;
    var int13 = 0;
    var int14 = -1 as cs2enum;
    var int15 = 0;
    var int16 = -1 as struct;
    var int17 = -1;
    var int18 = -1;
    var int19 = -1;
    var int20 = script10495(9);
    var int21 = script10495(12);
    var int22 = enum_getvalue(25, 0, 8549 as cs2enum, int10);
    var int23 = 24;
    var int24 = 0;
    if ((int22 > int23)) {
        int24 = ((int22 / 2) - (int23 / 2));
    };
    int14 = struct_getparam(int3, 4717);
    if ((int14 == -1 as cs2enum)) {
        int16 = int3;
    } else {
        int16 = enum_getvalue(0, 73, int14, int15);
    };
    var int25 = 0;
    var int26 = -1 as struct;
    var string1 = "";
    var int27 = -1 as dbrow;
    while ((int16 != -1 as struct)) {
        if ((struct_getparam(int16, 2531) == 2)) {
            int27 = script15769(int16);
        };
        if (((int27 != -1 as dbrow) && ((DB_GETFIELDCOUNT(int27, 667856) == 1) || (DB_GETFIELDCOUNT(int27, 667712) == 1)))) {
            stack(667648);
            stack(dbrow_getfield(int27, 667648, 0));
            DB_FIND(0);
            if ((DB_GETFIELDCOUNT(int27, 667856) == 1)) {
                unk11023(IF_SETPLAYERHEAD_SELF(IF_SETPLAYERHEAD_SELF(WORLDMAP_LISTELEMENT_START(667856, dbrow_getfield(int27, 667856, 0), 3, 0), WORLDMAP_LISTELEMENT_START(668000, 0, 3, 0)), WORLDMAP_LISTELEMENT_START(667984, 0, 3, 0)), 667744, 1);
                dbrow_findnext();
                int27 = stack();
            } else {
                dbrow_findnext();
                int27 = stack();
            };
            int25 = 1;
            while ((int27 != -1 as dbrow)) {
                [int5, int7] = script11369(script15770(int27), int1, int5, int7, enum_getvalue(0, 23, 9995 as cs2enum, int13), script19118(int27, 1));
                dbrow_findnext();
                int27 = stack();
            };
        } else {
            int26 = struct_getparam(int16, 5153);
            if ((int26 != -1 as struct)) {
                if (((struct_getparam(int26, 2531) != 2) || (struct_getparam(int26, 2532) >= 19))) {
                    [int5, int7] = script11369(int16, int1, int5, int7, enum_getvalue(0, 23, 9996 as cs2enum, struct_getparam(int26, 2531)), "");
                } else {
                    [int5, int7] = script11369(int16, int1, int5, int7, enum_getvalue(0, 23, 9995 as cs2enum, struct_getparam(int26, 2532)), "");
                };
            } else {
                [int5, int7] = script11369(int16, int1, int5, int7, enum_getvalue(0, 23, 9996 as cs2enum, struct_getparam(int16, 2531)), string0);
            };
        };
        if ((int14 == -1 as cs2enum)) {
            int16 = -1 as struct;
        } else {
            int15 = (int15 + 1);
            int16 = enum_getvalue(0, 73, int14, int15);
        };
    };
    var int28 = 0;
    if ((int7 < IF_GETHEIGHT(int1))) {
        IF_SETSCROLLSIZE(0, 0, int1);
        int28 = (int5 / 3);
        while ((int7 < IF_GETHEIGHT(int1))) {
            int28 = (int28 + 1);
            CC_CREATE[1](int1, 3, int5);
            CC_SETPOSITION[1](0, int7, 0, 0);
            CC_SETSIZE[1](0, MAX(int22, int23), 1, 0);
            if ((MODULO(int28, 2) == 1)) {
                CC_SETCOLOUR[1](int20);
            } else {
                CC_SETCOLOUR[1](int21);
            };
            CC_SETFILL[1](1);
            int5 = (int5 + 1);
            int7 = ((int7 + CC_GETHEIGHT[1]()) + int6);
        };
    } else {
        IF_SETSCROLLSIZE(0, int7, int1);
        IF_SETSCROLLPOS(0, 0, int1);
        script7791(int2, int1);
    };
    int6 = 0;
    int8 = (IF_GETWIDTH(int0) - (2 * int6));
    var string2 = GET_COL_TAG(script10495(3));
    string2 = APPEND_CHAR(string2, 60);
    string2 = `${string2}u${SUBSTRING(string2, 4, (STRING_LENGTH(string2) - 1))}`;
    var string3 = GET_COL_TAG(script10495(4));
    string3 = APPEND_CHAR(string3, 60);
    string3 = `${string3}u${SUBSTRING(string3, 4, (STRING_LENGTH(string3) - 1))}`;
    if ((int4 != -1 as obj)) {
        string2 = `This package contains the highlighted items listed below. Please note that this currency can only be used for the current event (${struct_getparam(varplayer_6628, 6135)}). Any currency not used by ${script3381(struct_getparam(varplayer_6628, 6134))} will be removed. There is no refund available for this package.`;
        string3 = "";
    } else if ((struct_getparam(int3, 6171) == true)) {
        string2 = "This package contains the highlighted items listed below.";
        string3 = "";
    } else if ((int25 == 0)) {
        string2 = "This package contains the highlighted items listed below. Please note that the package may be subject to restrictions.";
        string3 = "";
    } else {
        string2 = "This package contains the highlighted items listed below. Please note that the package may be subject to restrictions and it may contain additional items such as emotes, etc.";
        string3 = "";
    };
    var string4 = "Contents:";
    if (((CC_FIND(int0, int11) == 1) && (CC_FIND[1](int0, int12) == 1))) {
        CC_SETTEXT(string2);
        CC_SETSIZE((int6 * 2), script7593(CC_GETTEXT(), int8, CC_GETFONTMETRICS(), 0), 1, 0);
        CC_SETTEXT[1](string4);
        CC_SETSIZE[1]((int6 * 2), script7593(CC_GETTEXT(), int8, CC_GETFONTMETRICS(), 0), 1, 0);
        CC_SETHIDE[1](true);
    };
    var string5 = "No recolour available.";
    if ((varplayer_5008 == 1)) {
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETGRAPHIC(24782 as graphic);
        CC_SETSIZE(16, 16, 0, 0);
        CC_SETPOSITION(0, 0, 2, 0);
        script14990(2, string5);
    };
    return;
}