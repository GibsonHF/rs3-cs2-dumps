//
function script5743(int0: component, int1: int): void {
    var int2 = script10495(4);
    var int3 = IF_GETNEXTSUBID(int0);
    var int4 = 0;
    var int5 = ((varbitplayer_35716 / 5) + 1);
    if ((int5 < 10)) {
        int5 = 10;
    } else if ((int5 > (4000 / 5))) {
        int5 = (4000 / 5);
    };
    var int6 = 0;
    var int7 = 0;
    var int8 = 24;
    var int9 = 3;
    var int10 = 0;
    var string0 = "null";
    while ((int4 <= int5)) {
        int10 = ((int4 * 5) + 1);
        if ((int10 < 4000)) {
            int6 = ((int6 + int8) + int9);
            int7 = ((int4 * int8) + (int4 * int9));
            script2682(int0, (IF_GETWIDTH(int0) - 2), (int8 - 2), 1, (int7 + 1), 1, int4);
            int3 = IF_GETNEXTSUBID(int0);
            string0 = `Worlds ${inttostring(int10, 10)}-${inttostring(((int10 + 5) - 1), 10)}.`;
            script2995(int0, int3, 0, int7, 0, 0, IF_GETWIDTH(int0), int8, 0, 0, 2100 as dbrow, string0);
            CC_SETCOLOUR(int2);
            CC_SETTEXTALIGN(1, 1, 0);
            CC_SETMOUSEOVERCURSOR(46);
            CC_SETONMOUSEOVER(callback(script15920, 1, -2147483645, -2147483643, 122355718));
            CC_SETONMOUSELEAVE(callback(script15920, 0, -2147483645, -2147483643, 122355718));
            if ((int10 > int1)) {
                CC_SETTEXT("Locked");
            };
            int3 = IF_GETNEXTSUBID(int0);
            script2996(int0, int3, 1, (int7 + 1), 0, 0, (IF_GETWIDTH(int0) - 2), (int8 - 2), 0, 0, 4127 as dbrow);
            CC_SETFILL(0);
            CC_SENDTOBACK();
            CC_SETCOLOUR(0);
            CC_SETOP(1, "Select");
            CC_SETONVARTRANSMIT(callback(script5745, int0, 6922, 1));
            int3 = IF_GETNEXTSUBID(int0);
            script2996(int0, int3, 0, int7, 0, 0, IF_GETWIDTH(int0), int8, 0, 0, 4127);
            CC_SETFILL(0);
            CC_SETCOLOUR(16764170);
            CC_SETHIDE(1);
            int3 = IF_GETNEXTSUBID(int0);
            script15929(int0, int3, 1, (int7 + 1), 0, 0, (IF_GETWIDTH(int0) - 2), (int8 - 2), 0, 0, int4);
            if ((int10 <= int1)) {
                CC_SETHIDE(true);
            };
            int3 = IF_GETNEXTSUBID(int0);
        };
        int4 = (int4 + 1);
    };
    int6 = (int6 - int9);
    if (((int6 - int9) > IF_GETHEIGHT(comp(1867, 4)))) {
        IF_SETSCROLLSIZE(0, (0 - (0 - int6)), comp(1867, 4));
    } else {
        IF_SETSCROLLSIZE(0, 0, comp(1867, 4));
    };
    IF_SETSCROLLPOS(0, int6, comp(1867, 4));
    script7791(comp(1867, 3), comp(1867, 4));
    return;
}