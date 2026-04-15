//
function script13243(int0: component, int1: int): void {
    CC_DELETEALL(comp(1843, 292));
    CC_DELETEALL(comp(1843, 295));
    var int2 = comp(-1, 65535);
    var int3 = comp(-1, 65535);
    if ((varbitclient_35134 == 1)) {
        int2 = comp(1843, 295);
        int3 = comp(1843, 294);
        IF_SETHIDE(true, comp(1843, 289));
        if ((IF_FIND(comp(1843, 293)) == 1)) {
            CC_SETPOSITION(0, (((IF_GETY(comp(1843, 265)) + enum_getvalue(25, 0, 8549 as cs2enum, 58 as fontmetrics)) + enum_getvalue(25, 0, 8549 as cs2enum, 29 as fontmetrics)) + (2 * 8)), 2, 0);
            CC_SETSIZE(CC_GETWIDTH(), (IF_GETY(comp(1841, 5)) - CC_GETY()), 0, 0);
        };
    } else {
        int2 = comp(1843, 292);
        int3 = comp(1843, 289);
        IF_SETHIDE(true, comp(1843, 294));
    };
    var int4 = true;
    var int5 = -1;
    var int6 = -1;
    var int7 = 0;
    var int8 = 0;
    var int9 = -1 as struct;
    var int10 = -1;
    var int11 = -1;
    var int12 = -1;
    var int13 = -1;
    var int14 = -1;
    var int15 = 0;
    var int16 = 6;
    var string0 = "";
    var string1 = "";
    var string2 = "";
    while ((++int5 < 19)) {
        if ((CC_FIND(int0, int5) == 1)) {
            int9 = script15770(cc_getparam(8968));
            if (((int9 != -1 as struct) && (int8 == 0))) {
                int8 = 1;
                string0 = script9465(6);
            };
        };
    };
    IF_SETSIZE(0, 0, 1, 1, int3);
    int5 = 0;
    var int17 = IF_GETWIDTH(int2);
    var int18 = IF_GETHEIGHT(int2);
    var int19 = 24;
    var int20 = (IF_GETWIDTH(int3) - int17);
    var int21 = (IF_GETHEIGHT(int3) - int18);
    var int22 = 10;
    var int23 = 0;
    var int24 = 0;
    var int25 = 34;
    var int26 = 35;
    var int27 = 0;
    var int28 = 0;
    var int29 = int18;
    var int30 = 0;
    var string3 = "A";
    if ((int15 > 0)) {
        if (((STRING_LENGTH(string0) > 0) || (TESTBIT(int1, 3) == 1))) {
            int16 = 6;
            string0 = script9465(6);
        };
        int4 = false;
        if ((int14 > -1)) {
            if ((int5 != 0)) {
                int24 = int22;
            };
            CC_CREATE[1](int2, 5, int5++);
            CC_SETGRAPHIC[1](23851 as graphic);
            CC_SETSIZE[1](int25, int26, 0, 0);
            CC_CREATE(int2, 4, int5++);
            if ((STRING_LENGTH(string1) > 0)) {
                script14990(2, string1);
            };
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETCOLOUR(16777215);
            CC_SETTEXT(TOSTRING_LOCALISED(int14, 1));
            CC_SETSIZE(STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()), int26, 0, 0);
            int24 = ((int24 + CC_GETWIDTH[1]()) + CC_GETWIDTH());
            int23 = (int23 + int24);
            CC_SETPOSITION[1]((((int23 / 2) - CC_GETWIDTH()) - (CC_GETWIDTH[1]() / 2)), int28, 1, 0);
            CC_SETPOSITION(((int23 / 2) - (CC_GETWIDTH() / 2)), int28, 1, 0);
            script10762(int2, 0, (int5 - 3), ((0 - int24) / 2));
        };
        if ((int13 > -1)) {
            if ((int5 != 0)) {
                int24 = int22;
            };
            CC_CREATE[1](int2, 5, int5++);
            CC_SETGRAPHIC[1](23852 as graphic);
            CC_SETSIZE[1](int25, int26, 0, 0);
            CC_CREATE(int2, 4, int5++);
            if ((STRING_LENGTH(string2) > 0)) {
                script14990(2, string2);
            };
            CC_SETTEXTFONT(26 as fontmetrics);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETCOLOUR(16777215);
            CC_SETTEXT(TOSTRING_LOCALISED(int13, 1));
            CC_SETSIZE(STRINGWIDTH(CC_GETTEXT(), CC_GETFONTMETRICS()), int26, 0, 0);
            int24 = ((int24 + CC_GETWIDTH[1]()) + CC_GETWIDTH());
            int23 = (int23 + int24);
            CC_SETPOSITION[1]((((int23 / 2) - CC_GETWIDTH()) - (CC_GETWIDTH[1]() / 2)), int28, 1, 0);
            CC_SETPOSITION(((int23 / 2) - (CC_GETWIDTH() / 2)), int28, 1, 0);
            script10762(int2, 0, (int5 - 3), ((0 - int24) / 2));
        };
        int28 = (int28 + int26);
        int29 = MAX(0, (int18 - int28));
        int27 = int23;
    };
    int6 = 0;
    if (((STRING_LENGTH(string0) == 0) && (varbitclient_35134 == 1))) {
        if ((TESTBIT(int1, 2) == 1)) {
            if ((TESTBIT(int1, 1) == 1)) {
                string0 = "You can apply this customisation.";
                int16 = 3;
            };
        } else {
            string0 = "Customise your character by selecting options on the left.";
            int16 = 3;
        };
    };
    if ((STRING_LENGTH(string0) > 0)) {
        int4 = false;
        int29 = MAX(0, (int18 - int28));
        CC_CREATE(int2, 4, int5++);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXTSHADOW(true);
        CC_SETCOLOUR(script10495(int16));
        int30 = 0;
        if ((varbitclient_35134 != 0)) {
        } else if ((int15 == 0)) {
            while ((script7593(string3, 1000, CC_GETFONTMETRICS(), 0) < int29)) {
                int30 = (int30 + 1);
                string3 = `${string3}<br>A`;
            };
        };
        if ((int30 == 0)) {
            if ((int5 != 0)) {
                int24 = int22;
            };
            CC_CREATE[1](int2, 5, int5++);
            CC_SETGRAPHIC[1](23824 as graphic);
            script14991(2, string0);
            CC_SETSIZE[1](20, 20, 0, 0);
            int24 = (int24 + CC_GETWIDTH[1]());
            int23 = (int23 + int24);
            CC_SETPOSITION[1](((int23 / 2) - (CC_GETWIDTH[1]() / 2)), 0, 1, 1);
            script10762(int2, 0, (int5 - 3), ((0 - int24) / 2));
            int27 = int23;
        } else {
            CC_SETTEXT(script3930(string0, int17, int30, CC_GETFONTMETRICS()));
            if ((strcmp(CC_GETTEXT(), string0) != 0)) {
                script14990(2, string0);
            };
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETPOSITION(0, int28, 1, 0);
            CC_SETSIZE(PARAWIDTH(CC_GETTEXT(), int17, CC_GETFONTMETRICS()), (script7593(CC_GETTEXT(), int17, CC_GETFONTMETRICS(), 0) + 1), 0, 0);
            int27 = MAX(int27, CC_GETWIDTH());
            int28 = (int28 + CC_GETHEIGHT());
        };
    };
    if ((int28 < int19)) {
        IF_SETPOSITION(IF_GETX(int2), ((int19 - int28) / 2), 0, 1, int2);
    } else {
        IF_SETPOSITION(IF_GETX(int2), 0, 0, 1, int2);
    };
    if ((varbitclient_35134 == 0)) {
        IF_SETSIZE((MIN(int17, int27) + int20), (MAX(int19, MIN(int18, int28)) + int21), 0, 0, int3);
    } else {
        IF_SETSIZE((int17 + int20), (MAX(int19, MIN(int18, int28)) + int21), 0, 0, int3);
    };
    IF_SETHIDE(int4, int3);
    return;
}