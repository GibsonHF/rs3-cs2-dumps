//
function script16460(int0: component, int1: int, int2: int, int3: int, int4: obj, int5: obj, int6: int, string0: string): int {
    if ((int6 == -1)) {
        var int6 = script10495(2);
    };
    var int7 = 30;
    var int8 = 2;
    var int9 = 4;
    if ((int4 != -1 as obj)) {
        int9 = (int9 + int7);
    };
    var int10 = (int3 - int9);
    if ((int5 != -1 as obj)) {
        int10 = (int10 - (int7 + (int8 * 2)));
    };
    int9 = (int9 + int1);
    var int11 = script7593(string0, int10, 29 as fontmetrics, enum_getvalue(25, 0, 8549 as cs2enum, 29 as fontmetrics));
    if ((((int4 != -1 as obj) || (int5 != -1 as obj)) && (int11 < int7))) {
        int11 = int7;
    };
    CC_CREATE(int0, 4, IF_GETNEXTSUBID(int0));
    CC_SETPOSITION(int9, int2, 0, 0);
    CC_SETSIZE(int10, int11, 0, 0);
    CC_SETTEXT(string0);
    CC_SETTEXTFONT(29 as fontmetrics);
    CC_SETCOLOUR(int6);
    if (((int4 != -1 as obj) && (int5 != -1 as obj))) {
        CC_SETTEXTALIGN(1, 1, enum_getvalue(25, 0, 8549 as cs2enum, 29 as fontmetrics));
    } else {
        CC_SETTEXTALIGN(0, 1, enum_getvalue(25, 0, 8549 as cs2enum, 29 as fontmetrics));
    };
    var int2 = (int2 + (CC_GETHEIGHT() + (2 * 2)));
    var int12 = CC_GETY();
    var int13 = CC_GETHEIGHT();
    if ((int5 != -1 as obj)) {
        script9802(int0, IF_GETNEXTSUBID(int0), (((int1 + int3) - int7) - 2), ((int12 + (int13 / 2)) - (int7 / 2)), 0, 0, int7, int7, 0, 0, int5, 0, 1, 1);
    };
    if ((int4 != -1 as obj)) {
        script9802(int0, IF_GETNEXTSUBID(int0), (2 + int1), ((int12 + (int13 / 2)) - (int7 / 2)), 0, 0, int7, int7, 0, 0, int4, 0, 1, 1);
    };
    if ((MODULO(CC_GETID(), 2) != 0)) {
        CC_CREATE(int0, 3, IF_GETNEXTSUBID(int0));
    };
    return int2;
}