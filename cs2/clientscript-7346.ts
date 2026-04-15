//
function script7346(): void {
    var int0 = comp(1486, 14);
    var string0 = "";
    var int1 = -1 as obj;
    var int2 = 0;
    var int3 = 0;
    var int4 = cc_getparam(4261);
    var int5 = 1;
    var int6 = 0;
    var string1 = "";
    if ((int5 == 1)) {
        if ((PLAYERMEMBER() == false)) {
            string1 = "Membership<br>";
        } else if ((MAP_MEMBERS() == 0)) {
            string1 = "Log in to a Members' World<br>";
        };
    };
    var int7 = -1 as dbrow;
    stack(217136);
    stack(int4);
    DB_FIND(0);
    dbrow_findnext();
    int7 = stack();
    if ((int7 != -1)) {
        string0 = dbrow_getfield(int7, 217120, 0);
        [int2, int3] = dbrow_getfield(int7, 217248, 0);
        int1 = dbrow_getfield(int7, 217232, 0);
        if ((((STAT_BASE(21 as stat) < int2) || (STAT_BASE(18 as stat) < int3)) || (MAP_MEMBERS() == 0))) {
            int6 = 0;
        } else {
            int6 = 1;
        };
    };
    var int8 = 200;
    var int9 = 50;
    var int10 = 50;
    var int11 = 145;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 1;
    var int16 = 0;
    var int17 = 0;
    var int18 = 26 as fontmetrics;
    var int19 = 26 as fontmetrics;
    if ((script6431() == true)) {
        int18 = 28 as fontmetrics;
        int19 = 28 as fontmetrics;
        int8 = 300;
    };
    if (((strcmp(string0, "null") != 0) && (strcmp(string0, "") != 0))) {
        CC_CREATE(int0, 4, int17);
        CC_SETPOSITION(4, int12, 0, 0);
        CC_SETTEXT(string0);
        CC_SETSIZE((2 * 4), script7593(CC_GETTEXT(), (int8 - (2 * 4)), 58 as fontmetrics, enum_getvalue(25, 0, 8549 as cs2enum, 58 as fontmetrics)), 1, 0);
        CC_SETTEXTFONT(58 as fontmetrics);
        if (((MAP_MEMBERS() == 0) && (int5 == 1))) {
            CC_SETCOLOUR(15413039);
        } else {
            CC_SETCOLOUR(script10495(0));
        };
        CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549 as cs2enum, 58 as fontmetrics));
        int17 = (int17 + 1);
        int12 = ((int12 + CC_GETHEIGHT()) + (2 * 2));
        CC_CREATE(int0, 9, int17);
        CC_SETPOSITION(0, int12, 0, 0);
        CC_SETSIZE(0, 0, 1, 0);
        CC_SETCOLOUR(script10495(8));
        int17 = (int17 + 1);
        int12 = (int12 + 1);
        CC_CREATE(int0, 9, int17);
        CC_SETPOSITION(0, int12, 0, 0);
        CC_SETSIZE(0, 0, 1, 0);
        CC_SETCOLOUR(script10495(7));
        int17 = (int17 + 1);
        int12 = ((int12 + 1) + (2 * 2));
    };
    var int20 = 0;
    var int21 = 10;
    define_array(int21);
    define_array[65536](int21);
    var int22 = 0;
    while (((int20 < int21) && (int22 == 0))) {
        if ((int20 == 0)) {
            pop_array(int20, 0);
        } else {
            pop_array(int20, (push_array[1]((int20 - 1)) + 4));
        };
        pop_array[1](int20, STRING_INDEXOF_STRING(string1, "<br>", push_array(int20)));
        if ((push_array[1](int20) == -1)) {
            int22 = 1;
            pop_array[1](int20, STRING_LENGTH(string1));
        } else {
            int20 = (int20 + 1);
        };
    };
    int21 = int20;
    if ((STRING_LENGTH(string1) > 0)) {
        int20 = 0;
        CC_CREATE[1](int0, 3, int17);
        CC_SETPOSITION[1](0, int12, 0, 0);
        CC_SETFILL[1](1);
        if ((int15 == 1)) {
            CC_SETCOLOUR[1](3024933);
        } else {
            CC_SETCOLOUR[1](2367774);
        };
        int15 = MODULO((int15 + 1), 2);
        int17 = (int17 + 1);
        int12 = (int12 + 8);
        CC_CREATE(int0, 4, int17);
        CC_SETPOSITION(4, int12, 0, 0);
        CC_SETTEXT("Requirements:");
        CC_SETSIZE((2 * 4), script7593(CC_GETTEXT(), (int8 - (2 * 4)), int18, 0), 1, 0);
        CC_SETTEXTFONT(int18);
        if (((MAP_MEMBERS() == 0) && (int5 == 1))) {
            CC_SETCOLOUR(15413039);
        } else {
            CC_SETCOLOUR(script10495(3));
        };
        CC_SETTEXTALIGN(0, 1, 0);
        int17 = (int17 + 1);
        int12 = ((int12 + CC_GETHEIGHT()) + 8);
        int9 = 16;
        int10 = 16;
        int13 = ((4 + int9) + 4);
        while (((int20 < int21) && (int20 < 4))) {
            CC_CREATE(int0, 5, int17);
            CC_SETPOSITION(4, int12, 0, 0);
            CC_SETSIZE(int9, int10, 0, 0);
            if (((int20 == 3) && (int21 > 4))) {
                CC_SETGRAPHIC(18944 as graphic);
            } else {
                CC_SETGRAPHIC(21342 as graphic);
            };
            int17 = (int17 + 1);
            CC_CREATE(int0, 4, int17);
            CC_SETPOSITION(int13, int12, 0, 0);
            CC_SETTEXT(SUBSTRING(string1, push_array(int20), push_array[1](int20)));
            int14 = script7593(CC_GETTEXT(), ((int8 - int13) - 4), int19, 0);
            if ((int14 < int10)) {
                int14 = int10;
                CC_SETTEXTALIGN(0, 1, 0);
            } else {
                CC_SETTEXTALIGN(0, 0, 0);
            };
            CC_SETSIZE((int13 + 4), int14, 1, 0);
            CC_SETTEXTFONT(int19);
            if (((MAP_MEMBERS() == 0) && (int5 == 1))) {
                CC_SETCOLOUR(15413039);
            } else {
                CC_SETCOLOUR(16777215);
            };
            int17 = (int17 + 1);
            int12 = ((int12 + CC_GETHEIGHT()) + 2);
            int20 = (int20 + 1);
        };
        int12 = (int12 + 8);
        CC_SETSIZE[1](0, ((int12 - 2) - CC_GETY[1]()), 1, 0);
    };
    int9 = 50;
    int10 = 50;
    var int23 = -1;
    var int24 = 0;
    var int25 = 0;
    var int26 = 0;
    CC_CREATE[1](int0, 3, int17);
    CC_SETPOSITION[1](0, int12, 0, 0);
    CC_SETFILL[1](1);
    if ((int15 == 1)) {
        CC_SETCOLOUR[1](3024933);
    } else {
        CC_SETCOLOUR[1](2367774);
    };
    int15 = MODULO((int15 + 1), 2);
    int17 = (int17 + 1);
    int9 = 35;
    int10 = 35;
    int16 = (((int8 - (2 * 4)) - (4 * (int9 + 1))) / 3);
    CC_CREATE(int0, 4, int17);
    CC_SETTEXTFONT(29 as fontmetrics);
    CC_SETTEXT("Bait");
    CC_SETSIZE(int11, script7593(CC_GETTEXT(), int11, 29 as fontmetrics, enum_getvalue(25, 0, 8549 as cs2enum, 29 as fontmetrics)), 0, 0);
    CC_SETTEXTALIGN(0, 0, enum_getvalue(25, 0, 8549 as cs2enum, 29 as fontmetrics));
    int13 = ((int9 + 1) + int16);
    int24 = (int12 + 2);
    if ((CC_GETHEIGHT() <= 15)) {
        int12 = int24;
    };
    CC_SETPOSITION(int13, int12, 0, 0);
    if ((int6 == 0)) {
        CC_SETCOLOUR(15413039);
    } else {
        CC_SETCOLOUR(16777215);
    };
    int17 = (int17 + 1);
    int12 = ((int24 + enum_getvalue(25, 0, 8549 as cs2enum, 29 as fontmetrics)) + 5);
    int9 = 30;
    int10 = 30;
    int16 = 5;
    CC_CREATE(int0, 5, int17);
    CC_SETPOSITION(int13, (int12 - 1), 0, 0);
    CC_SETSIZE((int9 + 1), (int10 + 1), 0, 0);
    CC_SETGRAPHIC(18269 as graphic);
    int17 = (int17 + 1);
    CC_CREATE(int0, 5, int17);
    CC_SETSIZE(int9, int10, 0, 0);
    CC_SETPOSITION((int13 + 2), (int12 + 1), 0, 0);
    CC_SETOBJECT(int1, -1);
    int17 = (int17 + 1);
    int13 = (int13 + ((int9 + 1) + int16));
    CC_CREATE(int0, 4, int17);
    CC_SETPOSITION(int13, int12, 0, 0);
    CC_SETTEXT(OC_NAME(int1));
    CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549 as cs2enum, int19));
    CC_SETSIZE(105, int10, 1, 0);
    CC_SETTEXTFONT(int19);
    if ((int6 == 0)) {
        CC_SETCOLOUR(15413039);
    } else {
        CC_SETCOLOUR(16777215);
    };
    int17 = (int17 + 1);
    int12 = (int12 + (int10 + 8));
    int9 = 35;
    int10 = 35;
    int16 = (((int8 - (2 * 4)) - (4 * (int9 + 1))) / 3);
    CC_CREATE(int0, 4, int17);
    CC_SETTEXTFONT(29 as fontmetrics);
    CC_SETTEXT("Rewards");
    CC_SETSIZE(int11, script7593(CC_GETTEXT(), int11, 29 as fontmetrics, enum_getvalue(25, 0, 8549 as cs2enum, 29 as fontmetrics)), 0, 0);
    CC_SETTEXTALIGN(0, 0, enum_getvalue(25, 0, 8549 as cs2enum, 29 as fontmetrics));
    int13 = ((int9 + 1) + int16);
    CC_SETPOSITION(int13, int12, 0, 0);
    if ((int6 == 0)) {
        CC_SETCOLOUR(15413039);
    } else {
        CC_SETCOLOUR(16777215);
    };
    int17 = (int17 + 1);
    int12 = (int12 + (enum_getvalue(25, 0, 8549 as cs2enum, 29 as fontmetrics) + 5));
    int9 = 30;
    int10 = 30;
    int16 = 5;
    var int27 = DB_GETFIELDCOUNT(int7, 217296);
    var int28 = 0;
    var int29 = -1 as obj;
    while ((int28 < int27)) {
        int29 = dbrow_getfield(int7, 217296, int28);
        CC_CREATE(int0, 5, int17);
        CC_SETPOSITION(int13, (int12 - 1), 0, 0);
        CC_SETSIZE((int9 + 1), (int10 + 1), 0, 0);
        CC_SETGRAPHIC(18269 as graphic);
        int17 = (int17 + 1);
        CC_CREATE(int0, 5, int17);
        CC_SETSIZE(int9, int10, 0, 0);
        CC_SETPOSITION((int13 + 2), (int12 + 1), 0, 0);
        CC_SETOBJECT(int29, -1);
        int17 = (int17 + 1);
        CC_CREATE(int0, 4, int17);
        CC_SETPOSITION((((int13 + int9) + 1) + int16), int12, 0, 0);
        CC_SETTEXT(OC_NAME(int29));
        CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549 as cs2enum, int19));
        CC_SETSIZE(105, int10, 1, 0);
        CC_SETTEXTFONT(int19);
        if ((int6 == 0)) {
            CC_SETCOLOUR(15413039);
        } else {
            CC_SETCOLOUR(16777215);
        };
        int17 = (int17 + 1);
        int12 = (int12 + (int10 + 8));
        int25 = int12;
        int28 = (int28 + 1);
    };
    int9 = 35;
    int10 = 35;
    int16 = (((int8 - (2 * 4)) - (4 * (int9 + 1))) / 3);
    int13 = 4;
    int12 = int24;
    CC_CREATE(int0, 5, int17);
    CC_SETPOSITION(int13, (int12 - 1), 0, 0);
    CC_SETSIZE((int9 + 1), (int10 + 1), 0, 0);
    CC_SETGRAPHIC(18269 as graphic);
    int17 = (int17 + 1);
    CC_CREATE(int0, 5, int17);
    CC_SETPOSITION(int13, int12, 0, 0);
    CC_SETSIZE(int9, int10, 0, 0);
    CC_SETGRAPHIC(enum_getvalue(0, 23, 8548 as cs2enum, 23));
    int17 = (int17 + 1);
    CC_CREATE(int0, 4, int17);
    CC_SETPOSITION(int13, ((int12 + int10) + 2), 0, 0);
    CC_SETTEXT(`Lvl ${inttostring(int2, 10)}`);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETSIZE((int9 + 1), enum_getvalue(25, 0, 8549 as cs2enum, int19), 0, 0);
    CC_SETTEXTFONT(int19);
    if ((int6 == 0)) {
        CC_SETCOLOUR(15413039);
    } else {
        CC_SETCOLOUR(16777215);
    };
    int17 = (int17 + 1);
    int12 = ((((int24 + int10) + enum_getvalue(25, 0, 8549 as cs2enum, int19)) + 8) + 2);
    CC_CREATE(int0, 5, int17);
    CC_SETPOSITION(int13, (int12 - 1), 0, 0);
    CC_SETSIZE((int9 + 1), (int10 + 1), 0, 0);
    CC_SETGRAPHIC(18269 as graphic);
    int17 = (int17 + 1);
    CC_CREATE(int0, 5, int17);
    CC_SETPOSITION(int13, int12, 0, 0);
    CC_SETSIZE(int9, int10, 0, 0);
    CC_SETGRAPHIC(enum_getvalue(0, 23, 8548 as cs2enum, 20));
    int17 = (int17 + 1);
    CC_CREATE(int0, 4, int17);
    CC_SETPOSITION(int13, ((int12 + int10) + 2), 0, 0);
    CC_SETTEXT(`Lvl ${inttostring(int3, 10)}`);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETSIZE((int9 + 1), enum_getvalue(25, 0, 8549 as cs2enum, int19), 0, 0);
    CC_SETTEXTFONT(int19);
    if ((int6 == 0)) {
        CC_SETCOLOUR(15413039);
    } else {
        CC_SETCOLOUR(16777215);
    };
    int17 = (int17 + 1);
    int12 = (int12 + (((int10 + enum_getvalue(25, 0, 8549 as cs2enum, int19)) + 8) + 2));
    int12 = MAX(int12, int25);
    CC_SETSIZE[1](0, ((int12 - 2) - CC_GETY[1]()), 1, 0);
    IF_SETSIZE(int8, (int12 - 2), 0, 0, int0);
    return;
}