//
function script13465(int0: component): void {
    CC_DELETEALL(int0);
    var int1 = 742;
    var int2 = 16;
    var int3 = 3;
    var int4 = ((int1 - ((int3 - 1) * int2)) / int3);
    var int5 = 0;
    var int6 = 0;
    var string0 = "null";
    var string1 = "null";
    var int7 = -1 as graphic;
    while ((int5 < int3)) {
        [string0, string1, int7] = script13468(int5);
        CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION(int6, 0, 0, 0);
        CC_SETSIZE(int4, 0, 0, 1);
        CC_SETCOLOUR(script10495(9));
        CC_SETFILL(1);
        CC_CREATE[1](int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION[1](CC_GETX(), 8, 0, 0);
        CC_SETSIZE[1](CC_GETWIDTH(), 16, 0, 0);
        CC_SETCOLOUR[1](script10495(0));
        CC_SETTEXTFONT[1](57 as fontmetrics);
        CC_SETTEXT[1](string0);
        CC_SETTEXTALIGN[1](1, 1, 0);
        CC_CREATE(int0, 5, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION((int6 + 13), (CC_GETY[1]() + 24), 0, 0);
        CC_SETSIZE(212, 160, 0, 0);
        CC_SETGRAPHIC(int7);
        CC_SETFILL(1);
        CC_CREATE[1](int0, 4, IF_GETNEXTSUBID(int0));
        CC_SETPOSITION[1](CC_GETX(), ((CC_GETY() + CC_GETHEIGHT()) + 8), 0, 0);
        CC_SETSIZE[1](CC_GETWIDTH(), 1000, 0, 0);
        CC_SETCOLOUR[1](script10495(3));
        CC_SETTEXTSHADOW[1](true);
        CC_SETTEXTFONT[1](26 as fontmetrics);
        CC_SETTEXT[1](string1);
        CC_SETTEXTALIGN[1](0, 0, 0);
        int6 = ((int6 + int2) + int4);
        int5 = (int5 + 1);
    };
    return;
}