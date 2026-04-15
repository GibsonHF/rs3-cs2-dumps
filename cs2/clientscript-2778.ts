//
function script2778(int0: component, int1: component, int2: component, int3: component): void {
    var int4 = IF_GETHIDE(int1);
    var int5 = 0;
    if (((varbitplayer_3613 == 1) && (varplayer_1295 < 1000))) {
        if ((int4 == true)) {
            int5 = 1;
        };
        IF_SETHIDE(false, int1);
        IF_SETSIZE(0, (IF_GETHEIGHT(int1) + 1), 1, 1, int0);
    } else {
        if ((int4 == false)) {
            int5 = 1;
        };
        IF_SETHIDE(true, int1);
        IF_SETSIZE(0, 0, 1, 1, int0);
    };
    var string0 = varclient_2398;
    if (((STRING_LENGTH(varclient_2399) > 0) && (varplayer_455 == 1))) {
        string0 = varclient_2399;
    };
    var int6 = -1 as obj;
    if ((CC_FIND(int0, 0) == 1)) {
        int6 = CC_GETINVOBJECT();
    };
    var int7 = -1 as graphic;
    if ((CC_FIND(int0, 1) == 1)) {
        int7 = CC_GETGRAPHIC();
    };
    if ((((((CC_FIND(int2, 0) == 1) && (strcmp(string0, CC_GETTEXT()) == 0)) && (int6 == varclient_1003)) && (int7 == varclient_1004)) && (int5 == 0))) {
        return;
    };
    CC_DELETEALL(int0);
    CC_DELETEALL(int2);
    CC_DELETEALL(int3);
    var int8 = IF_GETWIDTH(int0);
    if ((int8 <= 0)) {
        return;
    };
    var int9 = 0;
    var int10 = 0;
    if ((varclient_1003 != -1 as obj)) {
        CC_CREATE(int0, 6, 0);
        CC_SETSIZE(varclient_1005, varclient_1006, 0, 0);
        if ((varclient_1005 < 70)) {
            int10 = ((70 - varclient_1005) / 2);
        };
        CC_SETPOSITION(int10, 0, 0, 1);
        CC_SETOBJECT_NONUM(varclient_1003, 1);
        int9 = (MAX(varclient_1005, 70) + 5);
        int8 = (int8 - int9);
        CC_CREATE(int0, 3, 1);
        CC_SETSIZE(0, 0, 0, 0);
        CC_SETPOSITION(0, 0, 0, 1);
        CC_SETHIDE(true);
    } else if ((varclient_1004 != -1 as graphic)) {
        CC_CREATE(int0, 3, 0);
        CC_SETSIZE(0, 0, 0, 0);
        CC_SETPOSITION(0, 0, 0, 1);
        CC_SETHIDE(true);
        CC_CREATE(int0, 5, 1);
        CC_SETSIZE(varclient_1005, varclient_1006, 0, 0);
        if ((varclient_1005 < 70)) {
            int10 = ((70 - varclient_1005) / 2);
        };
        CC_SETPOSITION(int10, 0, 0, 1);
        CC_SETGRAPHIC(varclient_1004);
        int9 = (MAX(varclient_1005, 70) + 5);
        int8 = (int8 - int9);
    };
    IF_SETSCROLLPOS(0, 0, int2);
    IF_SETPOSITION(int9, 0, 0, 1, int2);
    var int11 = ((PARAHEIGHT(string0, int8, 7 as fontmetrics) * 12) + 3);
    if ((int11 > IF_GETHEIGHT(int0))) {
        int8 = (int8 - (IF_GETWIDTH(int3) + 5));
        IF_SETSIZE(int8, 0, 0, 1, int2);
        int11 = ((PARAHEIGHT(string0, int8, 7 as fontmetrics) * 12) + 3);
        IF_SETSCROLLSIZE(0, int11, int2);
        IF_SETHIDE(false, int3);
        script31(int3, int2, 792 as graphic, 789 as graphic, 790 as graphic, 791 as graphic, 773 as graphic, 788 as graphic);
    } else {
        int11 = IF_GETHEIGHT(int0);
        IF_SETSIZE(int8, 0, 0, 1, int2);
        IF_SETSCROLLSIZE(0, 0, int2);
        IF_SETHIDE(true, int3);
    };
    CC_CREATE(int2, 4, 0);
    CC_SETSIZE(0, int11, 1, 0);
    CC_SETPOSITION(0, 0, 1, 0);
    CC_SETTEXTFONT(7 as fontmetrics);
    CC_SETTEXTALIGN(1, 1, 0);
    CC_SETCOLOUR(0);
    CC_SETTEXTSHADOW(false);
    CC_SETTEXT(string0);
    return;
}