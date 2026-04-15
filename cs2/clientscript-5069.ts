//
function script5069(int0: cs2enum, int1: component, int2: unknown_int, int3: int): int {
    var int4 = MIN(ENUM_GETOUTPUTCOUNT(int0), 256);
    var int5 = 0;
    var int6 = 0;
    while ((int5 < int4)) {
        CC_CREATE(int1, 3, IF_GETNEXTSUBID(int1));
        CC_SETSIZE(0, 14, 1, 0);
        CC_SETPOSITION(0, int6, 1, 0);
        CC_SETTRANS(255);
        CC_SETOP(1, "Select");
        CC_CREATE[1](int1, 5, IF_GETNEXTSUBID(int1));
        CC_SETSIZE[1](12, 12, 0, 0);
        CC_SETPOSITION[1](0, (int6 + 1), 0, 0);
        if ((int3 == int5)) {
            CC_SETGRAPHIC[1](5924 as graphic);
        } else {
            CC_SETGRAPHIC[1](5928 as graphic);
        };
        CC_CREATE[1](int1, 4, IF_GETNEXTSUBID(int1));
        CC_SETSIZE[1](17, 14, 1, 0);
        CC_SETPOSITION[1](0, int6, 2, 0);
        CC_SETTEXTFONT[1](66 as fontmetrics);
        CC_SETCOLOUR[1](14667711);
        CC_SETTEXTSHADOW[1](true);
        CC_SETTEXTALIGN[1](0, 1, 0);
        CC_SETTEXT[1](enum_getvalue(0, 36, int0, int5));
        CC_SETONMOUSEOVER(callback(script1356, -2147483645, CC_GETID[1](), 16777215));
        CC_SETONMOUSELEAVE(callback(script1356, -2147483645, CC_GETID[1](), 14667711));
        CC_SETONOP(callback(script5071, -2147483644, int2, int5, int0));
        int6 = (int6 + 15);
        int5 = (int5 + 1);
    };
    int6 = MAX((int6 - 1), 0);
    IF_SETSIZE(0, int6, 1, 0, int1);
    return int6;
}