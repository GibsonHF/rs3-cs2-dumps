//
function script4227(int0: component, int1: component, int2: component): void {
    CC_DELETEALL(int0);
    CC_DELETEALL(int1);
    CC_DELETEALL(int2);
    var int3 = 0;
    var int4 = ENUM_GETOUTPUTCOUNT(828 as cs2enum);
    var int5 = 0;
    var int6 = IF_GETPARENTLAYER(int0);
    IF_SETSCROLLPOS(0, 0, int6);
    if (((int4 * 28) < IF_GETHEIGHT(int6))) {
        IF_SETHIDE(true, int2);
        IF_SETSIZE((IF_GETWIDTH(int6) + 16), 0, 0, 1, int6);
    } else {
        IF_SETSCROLLSIZE(0, ((int4 * 28) + 2), int6);
        IF_SETHIDE(false, int2);
        script7791(int2, int6);
    };
    var int7 = -1 as obj;
    var string0 = "";
    var int8 = 0;
    var int9 = 3;
    var int10 = (IF_GETWIDTH(int0) / 2);
    while ((int3 < int4)) {
        int7 = enum_getvalue(0, 33, 828 as cs2enum, int3);
        if ((int7 != -1 as obj)) {
            string0 = OC_NAME(int7);
            int8 = item_getparam(int7, 1366);
            CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
            CC_SETPOSITION(0, int5, 0, 0);
            CC_SETSIZE(0, 28, 1, 0);
            CC_SETFILL(1);
            if ((MODULO(int3, 2) == 0)) {
                script13650(28679 as struct);
            } else {
                script13650(28680 as struct);
            };
            if ((varplayer_2773 < int8)) {
                int9 = 6;
            } else {
                int9 = 3;
            };
            CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
            CC_SETPOSITION(5, int5, 0, 0);
            CC_SETSIZE((int10 - 5), 28, 0, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            script2731(int0, CC_GETID(), int9);
            CC_SETTEXTALIGN(0, 1, 0);
            CC_SETMAXLINES(1);
            CC_SETTEXT(string0);
            CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
            CC_SETPOSITION(5, int5, 2, 0);
            CC_SETSIZE((int10 - 5), 28, 1, 0);
            CC_SETTEXTFONT(26 as fontmetrics);
            script2731(int0, CC_GETID(), int9);
            CC_SETTEXTALIGN(2, 1, 0);
            CC_SETMAXLINES(1);
            CC_SETTEXT(inttostring(int8, 10));
            CC_CREATE(int1, 3, IF_GETNEXTSUBID(int1));
            CC_SETPOSITION(0, int5, 0, 0);
            CC_SETSIZE(0, 28, 1, 0);
            CC_SETOP(1, "Claim");
            CC_SETOPBASE(string0);
            CC_SETONMOUSEOVER(callback(script14315, int7));
            CC_SETONMOUSELEAVE(callback(script14316));
            int5 = (int5 + 28);
        };
        int3 = (int3 + 1);
    };
    return;
}