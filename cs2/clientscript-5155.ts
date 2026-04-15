//
function script5155(int0: component, int1: int, int2: int, int3: unknown_int): void {
    var int4 = 0;
    var int5 = 0;
    var int6 = 0;
    var int7 = 0;
    var int8 = 0;
    if ((CC_FIND(int0, int1) == 1)) {
        int8 = IF_GETNEXTSUBID(int0);
        int4 = CC_GETX();
        int5 = CC_GETY();
        int7 = CC_GETHEIGHT();
        int6 = CC_GETWIDTH();
        CC_CREATE(int0, 3, int8);
        int8 = (int8 + 1);
        CC_CREATE[1](int0, 4, int8);
        CC_SETTEXT[1](`+${inttostring(int2, 10)}`);
        CC_SETTEXTFONT[1](26 as fontmetrics);
        CC_SETCOLOUR[1](16777215);
        CC_SETTEXTSHADOW[1](true);
        if ((int3 == 1)) {
            CC_SETSIZE(((int6 / 2) - 3), ((int7 / 2) - 3), 0, 0);
            CC_SETPOSITION(((int4 + (int6 / 2)) + 1), ((int5 + (int7 / 2)) + 1), 0, 0);
            CC_SETCOLOUR(728874);
            CC_SETFILL(1);
            CC_SETSIZE[1](((int6 / 2) - 3), ((int7 / 2) - 3), 0, 0);
            CC_SETPOSITION[1](((int4 + (int6 / 2)) + 1), ((int5 + (int7 / 2)) + 1), 0, 0);
            CC_SETTEXTALIGN[1](1, 1, 0);
        } else {
            CC_SETSIZE(15, 12, 0, 0);
            CC_SETPOSITION(((int4 + int6) - 19), ((int5 + int7) - 15), 0, 0);
            CC_SETCOLOUR(0);
            CC_SETFILL(1);
            CC_SETTRANS(76);
            CC_SETSIZE[1](int6, int7, 0, 0);
            CC_SETPOSITION[1]((int4 - 4), (int5 - 3), 0, 0);
            CC_SETTEXTALIGN[1](2, 2, 0);
        };
    };
    return;
}