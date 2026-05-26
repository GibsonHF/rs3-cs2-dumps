//[proc,player_kit_feet_redraw]
function script1506(): void {
    var int0 = -1 as cs2enum;
    var int1 = -1 as cs2enum;
    if ((GENDER() == 1)) {
        int0 = 1137 as cs2enum;
        int1 = 3294 as cs2enum;
    } else {
        int0 = 1136 as cs2enum;
        int1 = 3291 as cs2enum;
    };
    CC_DELETEALL(47710221);
    var int2 = 0;
    var int3 = ENUM_GETOUTPUTCOUNT(int0);
    var int4 = -1 as idkit;
    var string0 = "";
    var int5 = 0;
    var int6 = 0;
    while ((int2 < int3)) {
        int4 = enum_getvalue(0, 10, int0, int2);
        string0 = enum_getvalue(0, 36, int1, int2);
        CC_CREATE(47710221, 5, IF_GETNEXTSUBID(47710221));
        CC_SETSIZE(18, 18, 0, 0);
        CC_SETPOSITION(0, (int5 + 1), 0, 0);
        CC_CREATE[1](47710221, 4, IF_GETNEXTSUBID(47710221));
        CC_SETSIZE[1](20, 19, 1, 0);
        CC_SETPOSITION[1](0, int5, 2, 0);
        CC_SETTEXTALIGN[1](0, 1, 0);
        CC_SETCOLOUR[1](16750623);
        CC_SETTEXTFONT[1](27);
        CC_SETTEXT[1](string0);
        if ((int4 == varclient_1014)) {
            CC_SETGRAPHIC(18544);
            int6 = int5;
        } else {
            CC_SETGRAPHIC(18542);
            CC_SETONMOUSEOVER(callback(script1356, -2147483645, CC_GETID[1](), 16777215));
            CC_SETONMOUSELEAVE(callback(script1356, -2147483645, CC_GETID[1](), 16750623));
            CC_SETONMOUSEOVER[1](callback(script1356, -2147483645, CC_GETID[1](), 16777215));
            CC_SETONMOUSELEAVE[1](callback(script1356, -2147483645, CC_GETID[1](), 16750623));
            CC_SETOP(1, string0);
            CC_SETOP[1](1, string0);
            CC_SETONOP(callback(script1507, -2147483644, int4));
            CC_SETONOP[1](callback(script1507, -2147483644, int4));
        };
        int2 = (int2 + 1);
        int5 = (int5 + 20);
    };
    if ((int5 > IF_GETHEIGHT(47710221))) {
        IF_SETSIZE(20, 4, 1, 1, 47710221);
        IF_SETSCROLLSIZE(0, int5, 47710221);
        if ((int6 < IF_GETSCROLLY(47710221))) {
            IF_SETSCROLLPOS(0, (int6 - 5), 47710221);
        } else if (((int6 + 19) >= (IF_GETSCROLLY(47710221) + IF_GETHEIGHT(47710221)))) {
            IF_SETSCROLLPOS(0, ((int6 + 25) - IF_GETHEIGHT(47710221)), 47710221);
        };
        IF_SETHIDE(0, 47710222);
        script31(47710222, 47710221, 792, 789, 790, 791, 773, 788);
    } else {
        IF_SETSIZE(4, 4, 1, 1, 47710221);
        IF_SETSCROLLSIZE(0, 0, 47710221);
        IF_SETSCROLLPOS(0, 0, 47710221);
        CC_DELETEALL(47710222);
        IF_SETHIDE(1, 47710222);
    };
    CC_DELETEALL(47710224);
    int3 = ENUM_GETOUTPUTCOUNT(3297 as cs2enum);
    var int7 = 6;
    var int8 = ((((int3 - 1) / int7) + 1) * 21);
    if ((int8 > IF_GETHEIGHT(47710224))) {
        int7 = 5;
    };
    int2 = 0;
    int5 = 0;
    var int9 = 0;
    var int10 = -1;
    var int11 = 0;
    while ((int2 < int3)) {
        string0 = enum_getvalue(0, 36, 3296 as cs2enum, int2);
        int11 = enum_getvalue(0, 0, 3297 as cs2enum, int2);
        CC_CREATE(47710224, 3, IF_GETNEXTSUBID(47710224));
        CC_SETSIZE(20, 20, 0, 0);
        CC_SETFILL(1);
        CC_SETPOSITION((int9 * CC_GETWIDTH()), int5, 0, 0);
        CC_SETCOLOUR(enum_getvalue(0, 0, 753 as cs2enum, int2));
        CC_SETONMOUSEREPEAT(callback(script8799, string0, -2147483645, -2147483643));
        CC_CREATE[1](47710224, 5, IF_GETNEXTSUBID(47710224));
        CC_SETSIZE[1](CC_GETWIDTH(), CC_GETHEIGHT(), 0, 0);
        CC_SETPOSITION[1](CC_GETX(), CC_GETY(), 0, 0);
        if ((int11 == varclient_1018)) {
            CC_SETGRAPHIC[1](2289);
            int6 = int5;
        } else {
            int10 = 2288;
            CC_SETGRAPHIC[1](int10);
            CC_SETONMOUSELEAVE[1](callback(script688, -2147483645, CC_GETID[1](), int10));
            int10 = 2289;
            CC_SETONMOUSEOVER[1](callback(script688, -2147483645, CC_GETID[1](), int10));
            CC_SETOP[1](1, string0);
            CC_SETONOP[1](callback(script1508, -2147483644, int11));
        };
        int2 = (int2 + 1);
        if ((int9 < (int7 - 1))) {
            int9 = (int9 + 1);
        } else {
            int9 = 0;
            int5 = (int5 + CC_GETHEIGHT());
        };
    };
    if ((int9 != 0)) {
        int5 = (int5 + 21);
    };
    if (((int5 > IF_GETHEIGHT(47710224)) || (int7 < 6))) {
        IF_SETSIZE(20, 4, 1, 1, 47710224);
        IF_SETSCROLLSIZE(0, int5, 47710224);
        if ((int6 < IF_GETSCROLLY(47710224))) {
            IF_SETSCROLLPOS(0, (int6 - 5), 47710224);
        } else if (((int6 + 21) >= (IF_GETSCROLLY(47710224) + IF_GETHEIGHT(47710224)))) {
            IF_SETSCROLLPOS(0, ((int6 + 25) - IF_GETHEIGHT(47710224)), 47710224);
        };
        IF_SETHIDE(0, 47710225);
        script31(47710225, 47710224, 792, 789, 790, 791, 773, 788);
    } else {
        IF_SETSIZE(4, 4, 1, 1, 47710224);
        IF_SETSCROLLSIZE(0, 0, 47710224);
        IF_SETSCROLLPOS(0, 0, 47710224);
        CC_DELETEALL(47710225);
        IF_SETHIDE(1, 47710225);
    };
    return;
}