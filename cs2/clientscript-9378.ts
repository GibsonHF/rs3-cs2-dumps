//
function script9378(): void {
    IF_SETSCROLLPOS(0, 0, comp(209, 4));
    IF_SETSCROLLSIZE(0, 0, comp(209, 4));
    CC_DELETEALL(comp(209, 6));
    if ((varplayer_8741 == 0)) {
        IF_SETHIDE(true, comp(209, 4));
        IF_SETHIDE(false, comp(209, 7));
        return;
    };
    IF_SETHIDE(false, comp(209, 4));
    IF_SETHIDE(true, comp(209, 7));
    var int0 = comp(209, 5);
    var int1 = comp(209, 8);
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    var int2 = IF_GETWIDTH(int0);
    var string0 = "";
    var int3 = 0;
    var int4 = 0;
    var int5 = script8224((varplayer_8741 - 1));
    var int6 = -1;
    var int7 = -1 as achievement;
    if ((int5 != 2)) {
        int6 = script8226((varplayer_8741 - 1));
    } else {
        int7 = script15324((varplayer_8741 - 1));
    };
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(40, 40, 0, 0);
    CC_SETGRAPHIC(script9408(int5, int6, int7));
    CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, 0, 0, 0);
    CC_SETSIZE(40, 40, 0, 0);
    CC_SETGRAPHIC(script3563(int5, int6, int7));
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(45, 0, 0, 0);
    CC_SETSIZE(45, 40, 1, 0);
    CC_SETTEXTALIGN(0, 1, 0);
    CC_SETMAXLINES(2);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXT(script9407(int5, int6, int7));
    script2731(int0, CC_GETID(), 0);
    int3 = ((CC_GETY() + CC_GETHEIGHT()) + 5);
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(0, int3, 0, 0);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 1, 0);
    script2731(int0, CC_GETID(), 19);
    script9389(int0, int5, int6, int7);
    string0 = script9533(int5, int6, 1, int7);
    int4 = script7593(string0, int2, 26 as fontmetrics, 0);
    CC_SETSIZE(0, int4, 1, 0);
    CC_SETTEXT(string0);
    int3 = (int3 + (CC_GETHEIGHT() + 5));
    var int8 = script9534(int5);
    var int9 = 0;
    if ((int8 > 0)) {
        if ((TESTBIT(int8, 0) == 1)) {
            CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
            CC_SETPOSITION(15, int3, 0, 0);
            CC_SETSIZE(22, 5, 0, 0);
            CC_SETGRAPHIC(31701 as graphic);
            int9 = CC_GETID();
            CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
            CC_SETPOSITION(0, int3, 1, 0);
            CC_SETSIZE((44 + (15 * 2)), 5, 1, 0);
            CC_SETGRAPHIC(31702 as graphic);
            CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
            CC_SETPOSITION(15, int3, 2, 0);
            CC_SETSIZE(22, 5, 0, 0);
            CC_SETGRAPHIC(31703 as graphic);
            CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
            CC_SETPOSITION((15 + 2), (int3 + 1), 0, 0);
            CC_SETGRAPHIC(31696 as graphic);
            script9131(int0, int9, int5, int6, int7);
            script9129(int0, int9, int5, int6, int7);
            int3 = (int3 + (5 + 5));
        };
        if ((TESTBIT(int8, 1) == 1)) {
            CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
            CC_SETPOSITION(0, int3, 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTALIGN(1, 1, 0);
            string0 = script9536(int5, int6, int7);
            int4 = script7593(string0, int2, CC_GETFONTMETRICS(), 0);
            CC_SETSIZE(10, int4, 1, 0);
            script2731(int0, CC_GETID(), 19);
            CC_SETTEXT(string0);
            int3 = (int3 + (CC_GETHEIGHT() + 5));
        };
    };
    var string1 = "";
    var string2 = "";
    switch (int5) {
        case 1: {
            string1 = "Overview";
            string2 = "Journal";
            break;
        }
        case 2: {
            string1 = "Achievements";
            break;
        }
        case 3: {
            string1 = "Paths";
            break;
        }
        case 4: {
            string1 = "Challenges";
            break;
        }
        case 5: {
            string1 = "Skill Guide";
            break;
        }
        case 6: {
            string1 = "Minigames";
            break;
        }
        case 9: {
            string1 = "Yak Track";
            break;
        }
        case 10: {
            string1 = "Hero Pass";
            break;
        }
    };
    var int10 = 0;
    var int11 = 0;
    var int12 = 0;
    var int13 = 0;
    var int14 = 0;
    var int15 = 0;
    var int16 = 0;
    if ((strcmp(string1, "") != 0)) {
        int10 = (int2 / 2);
        int11 = (int10 - (150 / 2));
        int12 = (script7593(string1, 150, 26 as fontmetrics, 0) + 12);
        int15 = int12;
        if ((strcmp(string2, "") != 0)) {
            int14 = (script7593(string2, 150, 26 as fontmetrics, 0) + 12);
            int15 = MAX(int12, int14);
            int11 = (int10 - (((150 * 2) + 12) / 2));
            int13 = ((int11 + 150) + 12);
        };
        int16 = script10410(int0, int1, 28556 as struct, int11, int3, 150, int12, int16, false, string1);
        int16 = script10410(int0, int1, 28556 as struct, int13, int3, 150, int14, int16, false, string2);
        int3 = (int3 + (int15 + 5));
    };
    int3 = script9391(int0, int3, int5, int6, int7);
    if ((int3 > IF_GETHEIGHT(int0))) {
        IF_SETSCROLLSIZE(0, int3, comp(209, 4));
        script7791(comp(209, 6), comp(209, 4));
    };
    return;
}