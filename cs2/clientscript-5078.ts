//
function script5078(int0: unknown_int): void {
    CC_DELETEALL(comp(1114, 5));
    var int1 = 0;
    var int2 = ENUM_GETOUTPUTCOUNT(3921 as cs2enum);
    var int3 = -1 as cs2enum;
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    define_array((int2 + 1));
    var int7 = 1;
    while ((int1 < int2)) {
        int3 = enum_getvalue(0, 26, 3921 as cs2enum, int1);
        if ((int3 != -1 as cs2enum)) {
            [int4, int5] = [0, ENUM_GETOUTPUTCOUNT(int3)];
            while ((int4 < int5)) {
                int6 = MAX(int6, STRINGWIDTH(enum_getvalue(0, 36, int3, int4), 66 as fontmetrics));
                int4 = (int4 + 1);
            };
            pop_array(int7, (push_array((int7 - 1)) + int5));
            int7 = (int7 + 1);
        };
        int1 = (int1 + 1);
    };
    var int8 = (int6 + 28);
    int1 = 0;
    var int9 = 0;
    var int10 = 0;
    while ((int1 < int2)) {
        int3 = enum_getvalue(0, 26, 3921 as cs2enum, int1);
        if ((int3 != -1 as cs2enum)) {
            CC_CREATE(comp(1114, 5), 3, IF_GETNEXTSUBID(comp(1114, 5)));
            CC_SETSIZE(0, 33, 1, 0);
            CC_SETPOSITION(0, int9, 0, 0);
            CC_SETFILL(1);
            if ((MODULO(int1, 2) == 0)) {
                CC_SETCOLOUR(2170652);
            } else {
                CC_SETCOLOUR(1578773);
            };
            CC_CREATE(comp(1114, 5), 4, IF_GETNEXTSUBID(comp(1114, 5)));
            CC_SETSIZE((int8 + 15), 33, 1, 0);
            CC_SETPOSITION(5, int9, 0, 0);
            CC_SETTEXTFONT(66 as fontmetrics);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETCOLOUR(15327924);
            CC_SETTEXTSHADOW(true);
            CC_SETTEXT(enum_getvalue(0, 36, int3, -1));
            CC_CREATE(comp(1114, 5), 3, IF_GETNEXTSUBID(comp(1114, 5)));
            CC_SETSIZE(int8, 21, 0, 0);
            CC_SETPOSITION(6, (int9 + 6), 2, 0);
            CC_SETTRANS(255);
            CC_CREATE[1](comp(1114, 5), 5, IF_GETNEXTSUBID(comp(1114, 5)));
            CC_SETSIZE[1]((CC_GETWIDTH() - 40), CC_GETHEIGHT(), 0, 0);
            CC_SETPOSITION[1](26, CC_GETY(), 2, 0);
            if ((varclient_1095 == true)) {
                CC_SETGRAPHIC[1](6132 as graphic);
            } else {
                CC_SETGRAPHIC[1](6141 as graphic);
            };
            CC_CREATE[1](comp(1114, 5), 5, IF_GETNEXTSUBID(comp(1114, 5)));
            CC_SETSIZE[1]((CC_GETWIDTH() - 40), CC_GETHEIGHT(), 0, 0);
            CC_SETPOSITION[1](26, CC_GETY(), 2, 0);
            if ((varclient_1095 == true)) {
                CC_SETGRAPHIC[1](6135 as graphic);
                CC_SETTRANS[1](255);
            } else {
                CC_SETHIDE[1](true);
            };
            CC_CREATE[1](comp(1114, 5), 5, IF_GETNEXTSUBID(comp(1114, 5)));
            CC_SETSIZE[1](20, CC_GETHEIGHT(), 0, 0);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            if ((varclient_1095 == true)) {
                CC_SETGRAPHIC[1](6131 as graphic);
            } else {
                CC_SETGRAPHIC[1](6140 as graphic);
            };
            CC_CREATE[1](comp(1114, 5), 5, IF_GETNEXTSUBID(comp(1114, 5)));
            CC_SETSIZE[1](20, CC_GETHEIGHT(), 0, 0);
            CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
            if ((varclient_1095 == true)) {
                CC_SETGRAPHIC[1](6134 as graphic);
                CC_SETTRANS[1](255);
            } else {
                CC_SETHIDE[1](true);
            };
            CC_CREATE[1](comp(1114, 5), 5, IF_GETNEXTSUBID(comp(1114, 5)));
            CC_SETSIZE[1](20, CC_GETHEIGHT(), 0, 0);
            CC_SETPOSITION[1](6, CC_GETY(), 2, 0);
            if ((varclient_1095 == true)) {
                CC_SETGRAPHIC[1](6133 as graphic);
            } else {
                CC_SETGRAPHIC[1](6142 as graphic);
            };
            CC_CREATE[1](comp(1114, 5), 5, IF_GETNEXTSUBID(comp(1114, 5)));
            CC_SETSIZE[1](20, CC_GETHEIGHT(), 0, 0);
            CC_SETPOSITION[1](6, CC_GETY(), 2, 0);
            if ((varclient_1095 == true)) {
                CC_SETGRAPHIC[1](6136 as graphic);
                CC_SETTRANS[1](255);
            } else {
                CC_SETHIDE[1](true);
            };
            CC_CREATE[1](comp(1114, 5), 4, IF_GETNEXTSUBID(comp(1114, 5)));
            CC_SETSIZE[1](int6, 21, 0, 0);
            CC_SETPOSITION[1](30, CC_GETY(), 2, 0);
            CC_SETTEXTFONT[1](66 as fontmetrics);
            CC_SETTEXTALIGN[1](1, 1, 0);
            CC_SETCOLOUR[1](16777215);
            CC_SETTEXTSHADOW[1](false);
            CC_SETTEXT[1]("");
            int9 = (int9 + 33);
            if ((varclient_1095 == true)) {
                CC_SETONMOUSEOVER(callback(script5086, -2147483645, int1, 0));
                CC_SETONMOUSELEAVE(callback(script5086, -2147483645, int1, 1));
                CC_SETONRELEASE(callback(script5086, -2147483645, int1, 255));
                if ((int3 == 3922)) {
                    CC_SETONCLICK(callback(script5081, -2147483645, int1, int3, push_array(int1), MIN((push_array((int1 + 1)) - push_array(int1)), varbitplayer_7083), int10, int8));
                } else {
                    CC_SETONCLICK(callback(script5081, -2147483645, int1, int3, push_array(int1), (push_array((int1 + 1)) - push_array(int1)), int10, int8));
                };
            };
        };
        int1 = (int1 + 1);
    };
    if ((int9 > IF_GETHEIGHT(comp(1114, 5)))) {
        IF_SETSCROLLSIZE(0, int9, comp(1114, 5));
        IF_SETSCROLLPOS(0, IF_GETSCROLLY(comp(1114, 5)), comp(1114, 5));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1114, 5));
        IF_SETSCROLLPOS(0, 0, comp(1114, 5));
    };
    script31(comp(1114, 6), comp(1114, 5), 6507 as graphic, 6504 as graphic, 6505 as graphic, 6506 as graphic, 6499 as graphic, 6498 as graphic);
    script5080(comp(1114, 5));
    IF_SETONCLICK(callback(script5084, 73007109), comp(1114, 22));
    IF_SETONVARCTRANSMIT(callback(script5078, -2147483645, 1095, 1), int0);
    IF_SETONVARTRANSMIT(callback(script5078, -2147483645, 1995, 1), int0);
    IF_SETONVARTRANSMIT(callback(script5079, -2147483645, 1992, 1), 73007109);
    IF_SETONVARCSTRTRANSMIT(callback(script5079, -2147483645, 2537, 1), 73007109);
    return;
}