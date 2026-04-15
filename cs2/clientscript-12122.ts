//
function script12122(int0: component, int1: int, int2: component, int3: int, int4: int, int5: int, int6: dbrow): int {
    var int7 = int1;
    CC_CREATE(int0, 5, int1);
    CC_SETSIZE(212, 166, 0, 0);
    CC_SETPOSITION((int4 - 8), (int5 - 8), 0, 0);
    if ((varplayer_5992 == int6)) {
        CC_SETGRAPHIC(24229 as graphic);
    } else {
        CC_SETGRAPHIC(24228 as graphic);
    };
    var int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETSIZE(196, 150, 0, 0);
    CC_SETPOSITION(int4, int5, 0, 0);
    CC_SETGRAPHIC(script14925(int6));
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(dbrow_getfield(int6, 20560, 0));
    CC_SETSIZE(100, 100, 0, 0);
    CC_SETPOSITION((int4 + 48), (int5 + 40), 0, 0);
    int1 = (int1 + 1);
    CC_CREATE(int0, 4, int1);
    CC_SETTEXT(dbrow_getfield(int6, 20496, 0));
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXTALIGN(0, 0, 12);
    CC_SETCOLOUR(3351040);
    CC_SETSIZE(140, 32, 0, 0);
    CC_SETPOSITION((int4 + 5), (int5 + 5), 0, 0);
    int1 = (int1 + 1);
    var string0 = inttostring(dbrow_getfield(int6, 20624, 0), 10);
    CC_CREATE(int0, 4, int1);
    CC_SETTEXTFONT(26 as fontmetrics);
    CC_SETTEXT(string0);
    CC_SETTEXTALIGN(2, 0, 12);
    CC_SETCOLOUR(3351040);
    CC_SETSIZE(50, 20, 0, 0);
    CC_SETPOSITION((int4 + 141), (int5 + 130), 0, 0);
    var int8 = STRINGWIDTH(string0, CC_GETFONTMETRICS());
    int1 = (int1 + 1);
    CC_CREATE(int0, 5, int1);
    CC_SETGRAPHIC(26536 as graphic);
    CC_SETSIZE(16, 16, 0, 0);
    CC_SETPOSITION(((int4 + 170) - int8), (int5 + 128), 0, 0);
    int1 = (int1 + 1);
    var int9 = DB_GETFIELDCOUNT(int6, 20688);
    var int10 = 0;
    while ((int10 < int9)) {
        string0 = script12051(int6, int10);
        CC_CREATE(int0, 4, int1);
        CC_SETTEXTFONT(26 as fontmetrics);
        CC_SETTEXT(string0);
        CC_SETTEXTALIGN(0, 0, 12);
        CC_SETCOLOUR(3351040);
        CC_SETSIZE(50, 20, 0, 0);
        CC_SETPOSITION((int4 + 5), ((int5 + 130) - (12 * int10)), 0, 0);
        int1 = (int1 + 1);
        int10 = (int10 + 1);
    };
    if (((int2 != comp(-1, 65535)) && (CC_FIND(int2, int3) == 1))) {
        CC_SETSIZE(196, 132, 0, 0);
        CC_SETPOSITION(int4, int5, 0, 0);
        CC_SETTRANS(255);
        CC_SETHIDE(false);
        cc_setparam(5530, int6);
        cc_setparam(5531, int7);
        cc_setparam(5532, int1);
        CC_SETONMOUSEREPEAT(callback(script12123, -2147483645, -2147483643, int6, int0, int7, int1));
        CC_SETOP(1, "Select");
        CC_SENDTOFRONT();
        if ((int2 == 111935521)) {
            CC_SETONSCROLLWHEEL(callback(script36, 111935489, 111935490, -2147483646));
        };
    };
    return int1;
}